const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });
const PORT = process.env.PORT || 5000;
http.listen(PORT, function () {
    console.log("listening on *:5000");
    io.on("connection", (socket) => {
        const id = socket.handshake.query.id;
        socket.join(id);

        socket.on("send-message", ({ recipients, text }) => {
            recipients.forEach((recipient) => {
                const newRecipients = recipients.filter((r) => r !== recipient);
                newRecipients.push(id);
                socket.broadcast.to(recipient).emit("receive-message", {
                    recipients: newRecipients,
                    sender: id,
                    text,
                });
            });
        });
    });
});
