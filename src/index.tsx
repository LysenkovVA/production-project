import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import "./shared/config/i18n/i18n";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import "@/app/styles/index.scss";
import { StoreProvider } from "@/app/providers/StoreProvider";

// document.addEventListener("DOMContentLoaded", function(event) {
//     const container = document.getElementById("root");
//
//     if (!container) {
//         throw new Error("Контейнер root не найден! Не удалось вмонтировать react!");
//     }
//
//     const root = createRoot(container);
//     root.render(
//         <BrowserRouter>
//             <StoreProvider>
//                 <ErrorBoundary>
//                     <ThemeProvider>
//                         <App />
//                     </ThemeProvider>
//                 </ErrorBoundary>
//             </StoreProvider>
//         </BrowserRouter>
//     );
// });

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);

// const container = document.getElementById("root");
//
// if (!container) {
//     throw new Error("Контейнер root не найден! Не удалось вмонтировать react!");
// }
//
// const root = createRoot(container);
// root.render(
//     <BrowserRouter>
//         <StoreProvider>
//             <ErrorBoundary>
//                 <ThemeProvider>
//                     <App />
//                 </ThemeProvider>
//             </ErrorBoundary>
//         </StoreProvider>
//     </BrowserRouter>
// );

export { Theme } from "@/shared/const/theme";
