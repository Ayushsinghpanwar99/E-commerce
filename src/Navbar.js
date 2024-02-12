import React from 'react';
import { Link } from 'react-router-dom';
import './Component/navbar.css';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
  return (
    <>
      <header class="header">
        <a href="/" class="logo">fashion</a>

        <nav class="navbar">
        <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/girls'>Girls Way</Link>
          <Link to='/boys'>Boys Way</Link>
          <Link to='/contact'>Contact</Link> 
        </nav>
      </header>

      <div>
        <img className='img' src='https://cdn.shopaccino.com/ranisa-rajputi-fashion/home-banners/homepage-main-banner-620939_l.png?v=503?v=1' alt="Banner 1" />
        <img className='img1' src='https://cdn.shopaccino.com/ranisa-rajputi-fashion/home-banners/offer-banner-898564_l.png?v=503?v=1' alt="Banner 2" />
      </div>


<div class="container">
  <div class="card">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/categories/category-banner---half-poshaks---mobile-637854_s.png?v=503?1427392910" alt="Card 1" />
    <h3>HAMRAI POSHAKS</h3>
  </div>
  <div class="card">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/categories/category-banner---jewellery-02-120890_s.png?v=503?1427392910" alt="Card 2" />
    <h3>JEWELLERY</h3>
  </div>
</div>

{/* threee card img  POSHAKS*/ }
<div class='container1'>
  <p class='p'>POSHAKS</p>
</div>
<div class="card1-container">
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-10-11-at-41955-pm-264219_m.jpeg?v=503" alt="Image 1" />
    <div class="card1-text">BHAGYASHREE POSHAK</div>
    <div class="card1-text">₹1950.00</div>
  </div>
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-10-17-at-120744-pm-210525_m.jpeg?v=503" alt="Image 2" />
    <div class="card1-text">BHAGYASHREE POSHAK</div>
    <div class="card1-text">₹1950.00</div>
  </div>
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-10-16-at-32823-pm-576135_m.jpeg?v=503" alt="Image 3" />
    <div class="card1-text">TULSI POSHAK</div>
    <div class="card1-text">₹2950.00</div>
  </div>
</div>


<div class="card1-container">
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-08-20-at-10002-pm-793575_m.jpeg?v=503" alt="Image 1" />
    <div class="card1-text">DEVANYA POSHAK</div>
    <div class="card1-text">₹9150.00</div>
  </div>
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-11-09-at-115638-am-683237_m.jpeg?v=503" alt="Image 2" />
    <div class="card1-text">LADESAR POSHAK</div>
    <div class="card1-text">₹4650.00</div>
  </div>
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-10-16-at-32823-pm-576135_m.jpeg?v=503" alt="Image 3" />
    <div class="card1-text">SHASHI POSHAK</div>
    <div class="card1-text">₹1599.00</div>
  </div>
</div>



{/* threee card img RAJPUTI Suits*/ }
<div class='container1'>
  <p class='p'>RAJPUTI SUITS</p>
</div>

<div class="card1-container">
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-07-03-at-61308-pm-2-726151_m.jpeg?v=503" alt="Image 1" />
    <div class="card1-text">SHAACHI SUIT</div>
    <div class="card1-text">₹1120.00</div>
  </div>
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-09-17-at-121547-pm-1-714437_m.jpeg?v=503" alt="Image 2" />
    <div class="card1-text">VATIKA SUIT</div>
    <div class="card1-text">₹849.00</div>
  </div>
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-05-02-at-44229-pm-696123_m.jpeg?v=503" alt="Image 3" />
    <div class="card1-text">MADHU SUIT</div>
    <div class="card1-text">₹2950.00</div>
  </div>
</div>


{/* threee card img Saree*/ }
<div class='container1'>
  <p class='p'>SAREE'S</p>
</div>

<div class="card1-container">
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-01-21-at-124205-pm-3-321395_m.jpeg?v=503" alt="Image 1" />
    <div class="card1-text">GOLDEN ROSE SAREE</div>
    <div class="card1-text">₹2850.00</div>
  </div>
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-01-13-at-30103-pm-423558_m.jpeg?v=503" alt="Image 2" />
    <div class="card1-text">RIDE ROSE</div>
    <div class="card1-text">₹415.00</div>
  </div>
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2022-12-26-at-112535-am-1-580770_m.jpeg?v=503" alt="Image 3" />
    <div class="card1-text">NAVRANG SAREE</div>
    <div class="card1-text">₹675.00</div>
  </div>
</div>

{/* threee card img Jewellery*/ }
<div class='container1'>
  <p class='p'>JEWELLERY</p>
</div>

<div class="card1-container">
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2022-12-26-at-10123-pm-754508_m.jpeg?v=503" alt="Image 1" />
    <div class="card1-text">RAINA KANTHI SET</div>
    <div class="card1-text">₹199.00</div>
  </div>
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2022-12-23-at-51607-pm-560546_m.jpeg?v=503" alt="Image 2" />
    <div class="card1-text">SOORAJ JADAU RING</div>
    <div class="card1-text">₹149.00</div>
  </div>
  <div class="card1">
    <img src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2022-12-23-at-51607-pm-560546_m.jpeg?v=503" alt="Image 3" />
    <div class="card1-text">BINDI MEHRI</div>
    <div class="card1-text">₹249.00</div>
  </div>
</div>

    </>
  );
}

export default Navbar;


