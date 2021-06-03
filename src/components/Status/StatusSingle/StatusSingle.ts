import $ from "../../../lib/Helper/Helper";

let isActive: boolean = true;
let voted: boolean = false;

let elements = $(".starSvg");
let rating = $(".rating");

function appendClass(id: number) {
    elements.list.forEach((elm: HTMLElement) => {
       if (elm.nodeType === 1 ) {
			if (Number(elm.getAttribute("data-id"))  <= id ) {
				// elm.classList.add("is-active");
				$(elm).addClass('is-active');
			} else {
				// elm.classList.remove("is-active");
				$(elm).removeClass('is-active')
			}
	   }
    });
}

function removeAll() {
    // elements.forEach((elm) => elm.classList.remove("is-active"));
	elements.removeClass('is-active');
}

rating.on("mouseenter", () => (isActive = true));

rating.on("mouseleave", () => {
    if (voted) {
        return;
    }

    isActive = false; // :)
    removeAll();
});

// when vote
elements.on("click", () => {
	if (voted) {
		return;
	}

	voted = true;
	rating.addClass('disable-mouse')
});

elements.on("mouseover", (e:any) => {
	if (voted) {
		return;
	}

	if (e.target.nodeType === 1 ) {
		appendClass(e.target.getAttribute("data-id"));
	}
});