import { useState } from 'react';
import { Footer, Header, Home, Section } from "./components";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Header />
            <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            leftBtnTxt="Custom Order"
            rightBtnTxt="Existing Inventory"
            background="model-s.jpg"
            />
            <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            leftBtnTxt="Custom Order"
            rightBtnTxt="Existing Inventory"
            background="model-3.jpg"
            />
            <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            leftBtnTxt="Custom Order"
            rightBtnTxt="Existing Inventory"
            background="model-x.jpg"
            />
            <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            leftBtnTxt="Custom Order"
            rightBtnTxt="Existing Inventory"
            background="model-y.jpg"
            />
            <Section 
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            leftBtnTxt="Order now"
            rightBtnTxt="Learn more"
            background="solar-panel.jpg"
            />
            <Section 
            title="Solar Roof"
            description="Produce clean energy from your roof"
            leftBtnTxt="Order now"
            rightBtnTxt="Learn more"
            background="solar-roof.jpg"
            />
            <Section 
            title="Accessories"
            description=""
            leftBtnTxt="Shop now"
            rightBtnTxt=""
            background="accessories.jpg"
            />
            <Footer />
        </div>
    )
}

export default App;
