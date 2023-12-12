"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));

const port = 5000;
http_1.default
    .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const url = req.url;
    if (url === "/profile") {
        res.write("<h1>Welcome to your profile</h1>");
        res.end();
    }
    else if (url === "/shipment") {
        const data = [
            {
                "organization": "node ninja",
                "createdAt": "2020-08-12T19:04:55.455Z",
                "updatedAt": "2020-08-12T19:04:55.455Z",
                "products": ["developers", "pizza"],
                "marketValue": "90%",
                "address": "sangotedo",
                "ceo": "cn",
                "country": "Taiwan",
                "id": 2,
                "noOfEmployees": 2,
                "employees": ["james bond", "jackie chan"]
            }
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(data));
        res.end();
    }
    else {
        res.write("<h1>Hey There!</h1>");
        res.end();
    }
}).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
