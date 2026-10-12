
# MyStore - React Native Expo Assignment 1

## Project Overview

MyStore is a mobile shopping application home screen developed using React Native, Expo, and TypeScript. It provides a simple and attractive shopping experience with product categories, featured products, and promotional offers.

## Features

- Store header and welcome message
- Promotional shopping banner
- Four shopping categories
- Four featured products with images and prices
- Reusable UI components
- Horizontal category scrolling
- Vertical home screen scrolling
- Interactive product buttons
- Bottom navigation UI

## Technologies Used

- React Native
- Expo
- TypeScript
- Expo Router
- React Native Safe Area Context

## Project Structure

```text
src/
├── app/
│   └── index.tsx
└── components/
    ├── ProductCard.tsx
    ├── CategoryItem.tsx
    ├── SectionHeader.tsx
    ├── PromoBanner.tsx
    └── PrimaryButton.tsx
```

## Reusable Components

| Component | Description |
|---|---|
| ProductCard | Displays a product image, name, price, and button |
| CategoryItem | Displays an individual shopping category |
| SectionHeader | Displays a section title and action label |
| PromoBanner | Displays the promotional offer |
| PrimaryButton | Provides a reusable button UI |

## Getting Started

### Prerequisites

- Node.js and npm
- Expo Go installed on your Android or iOS device
- Git (optional, for version control)

### Installation

Clone the repository:

```bash
git clone https://github.com/Pranaykrishna02/ecommerce-mobile.git
```

Navigate into the project folder:

```bash
cd ecommerce-mobile
```

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Scan the displayed QR code using Expo Go to open the application.

If you encounter a bundler cache issue, run:

```bash
npx expo start --clear
```

## Testing

The following tests passed on an Android device:

- Home screen and promotional banner display
- Four shopping categories display
- Product images load correctly
- Product names and prices are readable
- Product buttons respond without crashing the app
- Vertical and horizontal scrolling work
- No render-error screen appears during testing

## Screenshots

Add screenshots of the working MyStore application here before final submission.

## Research Questions and Answers

Add the eight research questions and their answers from the original assignment instructions in this section.

## Scope

This assignment focuses on the mobile user interface. Product buttons currently provide UI interaction and do not implement backend product navigation, checkout, or payment processing.

## Future Improvements

- Product details screen
- Search and filtering
- Shopping cart functionality
- Backend API integration
- User authentication

## Author

Pranay Krishna Vamsi
