class CarouselItem {
    constructor(imageSrc, postSrc, title, description, inverse) {
        this.imageSrc = imageSrc;
        this.postSrc = postSrc;
        this.title = title;
        this.description = description;
        this.inverse = inverse === undefined ? false : true;
    }
}

function generateMarkupForCarousel(carouselId, carouselEntries) {
    const markupForSlidesAndIndicators = generateMarkupForIndicatorsAndSlides(carouselId, carouselEntries);
    const finalCarousel = [];
    finalCarousel.push('<div class="carousel slide" id="' + carouselId + '" data-ride="carousel">');
    finalCarousel.push(markupForSlidesAndIndicators);
    // Controls: Previous
    finalCarousel.push('<a class="left carousel-control" role="button" href="#' + carouselId + '" data-slide="prev">');
    finalCarousel.push('<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>');
    finalCarousel.push('<span class="sr-only">Previous</span>');
    finalCarousel.push('</a>');
    // Controls: Next
    finalCarousel.push('<a class="right carousel-control" role="button" href="#' + carouselId + '" data-slide="next">');
    finalCarousel.push('<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>');
    finalCarousel.push('<span class="sr-only">Next</span>');
    finalCarousel.push('</a>');
    finalCarousel.push('</div>'); // class="carousel slide"

    return finalCarousel.join('\r\n');
}

function generateMarkupForIndicatorsAndSlides(carouselId, carouselEntries) {
    const indicators = [];
    const slides = [];
    // indicators / slides pre-amble
    indicators.push('<ol class="carousel-indicators">');
    slides.push('<div class="carousel-inner" role="listbox">');
    let counter = 0;
    for (const entry of carouselEntries) {
        const indicatorCssClass = counter == 0 ? 'class="active" ' : '';
        const slideItemCssClass = counter == 0 ? 'class="item active"' : 'class="item"';
        const titleStyle = entry.inverse ? ' style="color: white;"' : '';
        indicators.push('<li ' + indicatorCssClass + 'data-target="#' + carouselId + '" data-slide-to="' + counter + '"></li>');
        slides.push('<div ' + slideItemCssClass + '>');
        slides.push('<img alt="' + entry.title + '" src="' + entry.imageSrc + '" />');
        slides.push('<div class="carousel-caption">');
        slides.push('<h3><a href="' + entry.postSrc + '">' + entry.title + '</a></h3>');
        slides.push('<div' + titleStyle + '>' + entry.description + '</div>');
        slides.push('</div>'); // class="carousel-caption"
        slides.push('</div>'); // class="item"
        counter++;
    }
    // indicators / slides closing
    indicators.push('</ol>');
    slides.push('</div>');

    const generatedMarkup = indicators.join('\r\n') + '\r\n' + slides.join('\r\n');

    return generatedMarkup;
}