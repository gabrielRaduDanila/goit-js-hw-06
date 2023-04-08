const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
const galleryTitle = document.createElement('h1');
const galleryItems = images
  .map((image) => {
    return `<li class="gallery__item"><img src="${image.url}" alt="${image.alt}"></li>`;
  })
  .join('');

galleryTitle.innerHTML = 'Gallery';
galleryTitle.style.textAlign = 'center';
gallery.before(galleryTitle);
gallery.insertAdjacentHTML('afterbegin', galleryItems);

// ==== styles for gallery ====
const listItems = [...document.querySelectorAll('img')];
listItems.forEach((item) => {
  item.style.width = 'auto';
  item.style.height = '100%';
  item.parentElement.style.width = '45%';
  item.parentElement.style.height = '250px';
  item.parentElement.style.textAlign = 'center';
});
gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.listStyle = 'none';
gallery.style.alignItems = 'center';
gallery.style.justifyContent = 'center';
gallery.style.gap = '30px';
