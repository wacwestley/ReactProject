import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
        {
            id: 0,
            src: "../../public/assets/images/ourStory.jpg",
            altText: "Barista making a Latte",
            header: "Humble Beginnings",
            caption: "Our Coffee is Great but Our Story is Even Better."
        },
        {
            id: 1,
            src: "../../public/assets/images/coffeeMenu.jpg",
            altText: "Fresh cup of coffee surrounded by roasted beans",
            header: "Handcrafted Menu",
            caption: "See what our talented group of coffee specialists have curated just for you"
        },
        {
            id: 2,
            src: "../../public/assets/images/venue.jpg",
            altText: "looking over the heads of people in a crowd to see the stage",
            header: "Upcoming Events",
            caption: "Come see what could be your next night out"
        }
    ];
    
const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map( item => {
        return (
            <CarouselItem
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.header} />
            </CarouselItem>
        );
    });

    return (
        <React.Fragment>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </React.Fragment>
    );
}

export default Home;   