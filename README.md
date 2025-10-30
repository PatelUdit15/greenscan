
#  GreenScan — Real-Time Eco-Friendliness Checker

###  Empowering Conscious Choices, One Scan at a Time

---

##  Overview

**GreenScan** is an intelligent, real-time web application that helps users understand how *eco-friendly* their everyday products are.  
By simply scanning a product barcode, GreenScan fetches verified sustainability information using the **OpenFoodFacts API** and calculates a unique **Eco-Score** (Green ??, Yellow ??, or Red ??).

It aims to fight *greenwashing* and promote sustainable living by providing **transparent, data-driven insights** about the environmental impact of products.

---

##  Key Features

-  **Barcode Scanner:** Instantly scan product barcodes using your device camera.  
-  **API-Driven Insights:** Retrieves real-world product data from **OpenFoodFacts**.  
-  **Eco-Score Indicator:** Displays color-coded scores (Green / Yellow / Red) based on sustainability metrics.  
-  **Real-Time Analysis:** Instant computation of eco-score with no page reloads.  
-  **Smart Backend Logic:** Custom **EcoScoreCalculator** processes ingredients, packaging, and labels.  
-  **Cross-Platform:** Works seamlessly on mobile and desktop via Blazor WebAssembly.

---

##  Architecture Overview

GreenScan is built as a **Blazor WebAssembly Hosted App**, which means it includes:

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Client (Frontend)** | Blazor WebAssembly, Tailwind CSS, QuaggaJS | Provides the user interface and handles camera access for barcode scanning. |
| **Server (Backend)** | ASP.NET Core Web API | Hosts APIs, performs external API calls, and contains business logic. |
| **Shared** | .NET Shared Library | Contains shared data models used by both Client and Server. |

---

##  Tech Stack

- **Frontend:** Blazor WebAssembly, Tailwind CSS, HTML5 Camera API  
- **Backend:** ASP.NET Core (Minimal APIs), C#  
- **Data Source:** [OpenFoodFacts API](https://world.openfoodfacts.org/data)  
- **Logic Engine:** Custom-built `EcoScoreCalculator` service  
- **Language:** C# (.NET 8.0)  
- **IDE:** Visual Studio 2022  

##  Project Structure
The solution consists of three projects:

1.greenscan.Server: The executable API host.

2.greenscan (Client): The Blazor WebAssembly UI.

3.greenscan.Shared: Holds common data models.

## Prerequisites

- [.NET SDK 8.0+](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [Visual Studio 2022](https://visualstudio.microsoft.com/)
- Internet connection (for API requests)

##  Clone the Repository

git clone https://github.com/PatelUdit15/GreenScan-DotNet.git
cd GreenScan-DotNet

## Restore Dependencies
dotnet restore


## Run the Server
cd greenscan.Server
dotnet run

Once the server starts, it will display a URL like:
https://localhost:7001

## Access the Application

Open your web browser and navigate to:

 https://localhost:7001/scan

Make sure to use the HTTPS URL — it’s required for camera access.

## Testing the Logic
Manual Entry: Use the input field and test barcodes (e.g., 5449000000996 for testing the API fetch).

Camera Scan: Click the "Tap to Start Camera Scan" button and grant camera permissions. Ensure you are accessing the app via HTTPS for camera functionality to work.



=======
# GreenScan
GreenScan is a modern, mobile-first web application designed to combat greenwashing by providing consumers with instant, verifiable sustainability scores for products using QR or barcode scanning. Built entirely on the robust .NET 8 stack, it offers a transparent, real-time verification tool that empowers conscious purchasing decisions.

