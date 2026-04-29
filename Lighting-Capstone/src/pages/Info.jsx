import InfoButton from "/src/components/infoButton.jsx";

function Info() {
    return (
        <div className="min-h-screen w-screen">
            <h1 className = "text-indigo-50">Info Page</h1>
            <h2>☆ Important Note: Most of these lights be LEDs or Incadescents.☆</h2>
            <span className = "grid grid-flow-col grid-rows-4 gap-0 ml-10">

            <img className = "m-5" src = "https://www.fullcompass.com/common/products/original/155985.jpg" width="200"/>
            <InfoButton
                name = "Source 4"
                link = "/source4"
            />
            <img src = "https://www.bsl-lighting.com/wp-content/uploads/2018/06/Theater-Fresnel-1.jpg" width = "200"/>
            <InfoButton
                name = "Fresnel"
                link = "/fresnel"
            />
             <img src = "https://www.lighting.atipro.in/wp-content/uploads/sites/3/2023/05/014.png" width = "200"/>
            <InfoButton
                name = "Par"
                link = "/par"
            />
             <img src = "https://www.stagespot.com/media/catalog/product/cache/6ffac0a70afe81f6af0c781648a41a72/R/O/ROS-ICUE-ICue.jpg" width = "200"/>
            <InfoButton
                name = "IQ"
                link = "/iq"
            />
             <img src = "https://i.ebayimg.com/images/g/4xcAAOSwbLFlLfhI/s-l1200.jpg" width = "200"/>
            <InfoButton
                name = "LED"
                link = "/led"
            />
             <img src = "https://iirorwxhqjnolr5p.leadongcdn.com/cloud/lrBpiKkilmSRoirjriooio/VG-LB603.jpg" width = "200"/>
            <InfoButton
                name = "Cyc"
                link = "/cyc"
            />
            </span>
        </div>
    );
}

export default Info;