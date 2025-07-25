// filtered-temples.js
// Array of temple objects (sample + 3 additional)
const temples = [
  {
    name: "Salt Lake City Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "April 6, 1893",
    area: 253015,
    image: "images/salt-lake-city-398843_640.jpg"
  },
  {
    name: "Ogden Utah Temple",
    location: "Ogden, Utah, USA",
    dedicated: "January 18, 1972",
    area: 115000,
    image: "images/ogden-utah-temple-4173-thumb.jpg"
  },
  {
    name: "Rexburg Idaho Temple",
    location: "Rexburg, Idaho, USA",
    dedicated: "February 10, 2008",
    area: 57000,
    image: "images/rexburg-idaho-temple-33444-thumb.jpg"
  },
  {
    name: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "August 7, 2005",
    area: 11500,
    image: "images/aba-nigeria-temple-5087-main.jpg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "January 11, 2004",
    area: 17500,
    image: "images/accra-ghana-temple-13760-main.jpg"
  },
  // Additional temples
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "March 10, 2019",
    area: 40000,
    image: "images/Rome Italy Temple.jpeg"
  },
  {
    name: "Medford Oregon Temple",
    location: "Medford, Oregon, USA",
    dedicated: "April 16, 2000",
    area: 10700,
    image: "images/Medford Oregon Temple.jpeg"
  },
  {
    name: "Anchorage Alaska Temple",
    location: "Anchorage, Alaska, USA",
    dedicated: "January 9, 1999",
    area: 11937,
    image: "images/Anchorage Alaska Temple.jpeg"
  }
];

function renderTemples(filteredTemples) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  filteredTemples.forEach(temple => {
    const card = document.createElement('div');
    card.className = 'temple-card';
    card.innerHTML = `
      <img src="${temple.image}" alt="${temple.name}" loading="lazy">
      <h3>${temple.name}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;
    gallery.appendChild(card);
  });
}

function filterTemples(type) {
  let filtered = temples;
  if (type === 'old') {
    filtered = temples.filter(t => parseInt(t.dedicated.split(',')[1]) < 1900);
  } else if (type === 'new') {
    filtered = temples.filter(t => parseInt(t.dedicated.split(',')[1]) > 2000);
  } else if (type === 'large') {
    filtered = temples.filter(t => t.area > 90000);
  } else if (type === 'small') {
    filtered = temples.filter(t => t.area < 10000);
  }
  renderTemples(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTemples(temples);
  document.querySelectorAll('nav [data-filter]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      filterTemples(link.getAttribute('data-filter'));
    });
  });
  // Footer year and last modified
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;
});
