import React from 'react';
import apartments from "../../datas/datas_test.json"
import Card from "../Card/Card"
import "./_gallery.scss"


function Gallery() {
    if (Array.isArray(apartments) && apartments.length > 0) {
        // console.log(Card);
        return (
            <section aria-label="Galerie appartements" className="sectionGalerie">
                {apartments.map(apartment => (
                    <Card
                        id={apartment.id}
                        title={apartment.title}
                        cover={apartment.cover}
                        key={apartment.id}
                    />
                ))}
            </section>
            
        );
    }
    
    return null;
}

export default Gallery;