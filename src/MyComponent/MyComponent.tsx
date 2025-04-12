import { useState } from "react";
import styles from "./MyComponent.module.scss";

export default function MyComponent() {
    const [url, setUrl] = useState("www.youtube.com/");
    const [dim, setDim] = useState("150x150");
    function newUrl(): string {
        return (
            "https://api.qrserver.com/v1/create-qr-code/?size=" +
            dim +
            "&data=" +
            url
        );
    }
    function updImg() {
        document.getElementById("image")!.setAttribute("src", newUrl());
    }

    return (
        <div>
            <h1>Gerador de QR code</h1>
            <div className={styles.inputs}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />{" "}
                <select value={dim} onChange={(e) => setDim(e.target.value)}>
                    <option value="150x150">150x150</option>
                    <option value="300x300">300x300</option>
                    <option value="600x600">600x600</option>
                </select>
                <button onClick={updImg}>Gerar</button>
            </div>
            <br />
            <div className={styles.output}>
                <a href={newUrl()}>
                    <img className={styles.image} id="image" src={newUrl()} />
                </a>
                <button onClick={() => window.open(newUrl(), "_blank")}>Download</button>
            </div>
        </div>
    );
}
