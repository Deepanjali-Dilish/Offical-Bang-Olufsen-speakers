async function loadCards() {
    try {
      const response = await fetch('./data/products.json');
      if (!response.ok) throw new Error('Failed to fetch cards data');
      const cards = await response.json();
      renderCards(cards);
    } catch (error) {
      console.error('Error loading cards:', error);
    }
  }
  
  function renderCards(cards) {
    const list = document.querySelector('.productListing-list');
    if (!list) {
      console.error('List container not found');
      return;
    }
    
    list.innerHTML = ''; 
  
    cards.forEach(card => {
      const li = document.createElement('li');
      li.className = 'sc-btn knPvs m-productlist gridp-card gridp fade';
  
      li.innerHTML = `
        <div class="sc-btn dD product-wrap default">
          <div class="content-container product-container">
            <div class="product-image">
              <div class="product-header">
                <span class="product-name aligntext b3">${card.name}</span>
                <div class="sc-btn gxs o-procuctcard"></div>
              </div>
              <div class="product-tags">
                <div class="sc-btn gxs o-procuctcard"></div>
              </div>
              <div class="card-product new-cardp sc-btn bfm">
                <div class="slick-slide productslides slide">
                  <div class="slick-list">
                    <div class="slick-track">
                      <div class="sc-btn chu medium load responsive" style="width: 100%; display: inline-block;">
                        <div class="sc-btn kcm a-observer in-view">
                          <img 
                            alt="${card.imageAlt || ''}" 
                            class="-loaded" 
                            src="${card.imageUrl}" 
                            sizes="${card.imageSizes || '(min-width: 1600px) 1200px, (min-width: 1024px) 720px, (min-width: 768px) 512px, 375px'}"
                            srcset="${card.imageSrcSet || ''}"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
            ${card.showInfo ? `
            <div class="product-info">
            <div class="product-details align-cass false">
                <div class="product-card-price">
                <div class="product-cardprice b3">${card.price || ''}</div>
                </div>
                <div class="counts-container">
                <p class="h6 color-label">COLOURS
                    <span class="count-items">(${card.colorsCount || 0})</span>
                </p>
                <span style="display: block;">
                    <img class="plus" src="img/plus-open-variants-icon.svg" alt="Plus Icon">
                </span>
                </div>
            </div>
            </div>
        </div>` : ''}
        `;
  
      list.appendChild(li);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadCards);


