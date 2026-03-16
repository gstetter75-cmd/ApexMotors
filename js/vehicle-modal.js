/* ==========================================================================
   APEX MOTORS — Vehicle Detail Modal
   Gallery, specs, description, focus trap, keyboard navigation
   ========================================================================== */

function initVehicleModal() {
  const modal = document.getElementById('vehicleModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
  const overlay = modal ? modal.querySelector('.modal-overlay') : null;

  if (!modal || !modalBody) return;

  let previousFocus = null;
  let currentGalleryIndex = 0;
  let currentVehicle = null;

  // Register click handlers on all vehicle cards
  document.querySelectorAll('[data-vehicle-id]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // Don't open modal if clicking a link/button inside the card
      if (e.target.closest('a, button')) return;
      const id = card.getAttribute('data-vehicle-id');
      openModal(id);
    });
  });

  function openModal(vehicleId) {
    const vehicle = getVehicleById(vehicleId);
    if (!vehicle) return;

    currentVehicle = vehicle;
    currentGalleryIndex = 0;
    previousFocus = document.activeElement;

    renderModal(vehicle);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus the close button
    requestAnimationFrame(() => {
      modalClose.focus();
    });

    // Announce to screen readers
    const liveRegion = document.getElementById('ariaLive');
    if (liveRegion) {
      const lang = document.documentElement.getAttribute('lang') || 'en';
      liveRegion.textContent = lang === 'de'
        ? `Fahrzeugdetails ge\u00f6ffnet: ${vehicle.name}`
        : `Vehicle details opened: ${vehicle.name}`;
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';

    if (previousFocus) {
      previousFocus.focus();
      previousFocus = null;
    }

    currentVehicle = null;
  }

  function renderModal(vehicle) {
    const lang = document.documentElement.getAttribute('lang') || 'en';
    const desc = vehicle.description[lang] || vehicle.description.en;
    const inquireText = lang === 'de' ? 'Anfrage senden' : 'Private Inquiry';
    const specsTitle = lang === 'de' ? 'Spezifikationen' : 'Specifications';
    const priceText = lang === 'de' ? 'Preis auf Anfrage' : 'Price on Request';

    const specRows = [
      [lang === 'de' ? 'Leistung' : 'Power', `${vehicle.specs.hp} HP`],
      [lang === 'de' ? 'H\u00f6chstgeschwindigkeit' : 'Top Speed', vehicle.specs.topSpeed],
      ['0-100 km/h', vehicle.specs.acceleration],
      [lang === 'de' ? 'Motor' : 'Engine', vehicle.specs.engine],
      [lang === 'de' ? 'Antrieb' : 'Drivetrain', vehicle.specs.drivetrain],
      [lang === 'de' ? 'Gewicht' : 'Weight', vehicle.specs.weight],
      [lang === 'de' ? 'Getriebe' : 'Transmission', vehicle.specs.transmission]
    ];

    const limitedBadge = vehicle.limited
      ? `<span class="modal-limited">${lang === 'de' ? 'Limitiert auf' : 'Limited to'} ${vehicle.limited.total} ${lang === 'de' ? 'Einheiten' : 'units'}</span>`
      : '';

    modalBody.innerHTML = `
      <div class="modal-layout">
        <div class="modal-gallery">
          <div class="modal-gallery-main">
            <img src="${vehicle.images[0]}" alt="${vehicle.name}" class="modal-main-img" id="modalMainImg">
          </div>
          ${vehicle.images.length > 1 ? `
          <div class="modal-gallery-thumbs">
            ${vehicle.images.map((img, i) => `
              <button class="modal-thumb${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Image ${i + 1}">
                <img src="${img.replace('w=1200', 'w=200').replace('w=800', 'w=200')}" alt="${vehicle.name} view ${i + 1}">
              </button>
            `).join('')}
          </div>
          ` : ''}
        </div>
        <div class="modal-details">
          <div class="modal-header">
            <span class="modal-brand">${vehicle.brand}</span>
            <h2 class="modal-vehicle-name">${vehicle.model}</h2>
            <div class="modal-meta">
              <span class="modal-year">${vehicle.year}</span>
              ${limitedBadge}
            </div>
          </div>
          <p class="modal-description">${desc}</p>
          <div class="modal-specs">
            <h3 class="modal-specs-title">${specsTitle}</h3>
            <div class="modal-specs-grid">
              ${specRows.map(([label, value]) => `
                <div class="modal-spec-row">
                  <span class="modal-spec-label">${label}</span>
                  <span class="modal-spec-value">${value}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="modal-footer">
            <span class="modal-price">${priceText}</span>
            <a href="#inquiry" class="btn btn-primary modal-cta" id="modalInquiryBtn">${inquireText}</a>
          </div>
        </div>
      </div>
    `;

    // Gallery thumbnail click handlers
    modalBody.querySelectorAll('.modal-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const index = parseInt(thumb.dataset.index, 10);
        setGalleryImage(index);
      });
    });

    // Inquiry button: close modal and scroll to form
    const inquiryBtn = document.getElementById('modalInquiryBtn');
    if (inquiryBtn) {
      inquiryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();

        // Set vehicle in form dropdown
        const vehicleSelect = document.getElementById('vehicle');
        if (vehicleSelect) {
          const option = Array.from(vehicleSelect.options).find(
            o => o.value === vehicle.id || o.text.includes(vehicle.model)
          );
          if (option) vehicleSelect.value = option.value;
        }

        // Scroll to inquiry
        const inquiry = document.getElementById('inquiry');
        if (inquiry) {
          setTimeout(() => {
            inquiry.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
      });
    }
  }

  function setGalleryImage(index) {
    if (!currentVehicle) return;
    currentGalleryIndex = index;

    const mainImg = document.getElementById('modalMainImg');
    if (mainImg) {
      mainImg.style.opacity = '0';
      setTimeout(() => {
        mainImg.src = currentVehicle.images[index];
        mainImg.style.opacity = '1';
      }, 200);
    }

    modalBody.querySelectorAll('.modal-thumb').forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
  }

  // Close handlers
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    // Arrow keys for gallery
    if (currentVehicle && currentVehicle.images.length > 1) {
      if (e.key === 'ArrowLeft') {
        setGalleryImage((currentGalleryIndex - 1 + currentVehicle.images.length) % currentVehicle.images.length);
      } else if (e.key === 'ArrowRight') {
        setGalleryImage((currentGalleryIndex + 1) % currentVehicle.images.length);
      }
    }

    // Focus trap
    if (e.key === 'Tab') {
      const focusable = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });
}
