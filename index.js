import gallery from "./gallery-items.js";

const refs = {
  list: document.querySelector(".gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxOverlay: document.querySelector(".lightbox__overlay"),
  lightBoxContent: document.querySelector(".lightbox__content"),
  lightboxImage: document.querySelector(".lightbox__image"),
  lightboxButton: document.querySelector(".lightbox__button"),
};

const createGalleryItems = (gallery) => {
  return gallery.map(({ preview, original, description }) => {
    const localRefs = {
      elem: document.createElement("li"),
      elemLink: document.createElement("a"),
      elemImage: document.createElement("img"),
    };

    localRefs.elem.classList.add("gallery__item");
    localRefs.elemLink.classList.add("gallery__link");
    localRefs.elemImage.classList.add("gallery__image");
    localRefs.elemLink.setAttribute("href", original);
    localRefs.elemImage.setAttribute("src", preview);
    localRefs.elemImage.setAttribute("data-sourse", original);
    localRefs.elemImage.setAttribute("alt", description);
    localRefs.elem.appendChild(localRefs.elemLink);
    localRefs.elemLink.appendChild(localRefs.elemImage);
    return localRefs.elem;
  });
};

const elements = createGalleryItems(gallery);
elements.forEach((element) => {
  refs.list.appendChild(element);
});

//------open

refs.list.addEventListener("click", (event) => {
  event.preventDefault();

  refs.lightbox.classList.add("is-open");
  refs.lightboxImage.src = event.target.getAttribute("data-sourse");
});

//--------close

refs.lightboxButton.addEventListener("click", (event) => {
  refs.lightbox.classList.remove("is-open");
});
refs.lightBoxContent.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    refs.lightbox.classList.remove("is-open");
  }
});

//-------key

function escapeKey() {
  if (event.key === "Escape") {
    refs.lightbox.classList.remove("is-open");
    };
};

window.addEventListener("keyup", escapeKey);
