import p1_img from "./product1.png";
import p2_img from "./product2.png";
import p3_img from "./product3.png";
import p4_img from "./product4.png";
import p5_img from "./product5.png";
import p6_img from "./product6.png";
import p7_img from "./product7.png";
import p8_img from "./product8.png";
import p9_img from "./product9.png";
import p10_img from "./product10.png";
import p11_img from "./product111.png";
import p12_img from "./product112.png";
import p13_img from "./product113.png";
import p14_img from "./product114.png";
import p15_img from "./product15.png";
import p16_img from "./product16.png";
import p17_img from "./product17.png";
import p18_img from "./product18.png";
import p19_img from "./product19.png";
import p20_img from "./product20.png";
import p21_img from "./product21.png";
import p22_img from "./product22.png";
import p23_img from "./product23.png";
import p24_img from "./product24.png";
import p25_img from "./product25.png";
import p26_img from "./product26.png";
import p27_img from "./product27.png";
import p28_img from "./product28.png";
import p29_img from "./product29.png";
import p30_img from "./product30.png";
import p31_img from "./product31.png";
import p32_img from "./product32.png";
import p33_img from "./product33.png";
import p34_img from "./product34.png";
import p35_img from "./product35.png";
import p36_img from "./product36.png";

let all_product = [
  {
    id: 1,
    name: "Dr. Reckeweg R71 Ischialgin Drops 22 ml",
    category: "homeo",
    image: p1_img,
    new_price: 229.0,
    old_price: 280.5,
  },
  {
    id: 2,
    name: "Dr.Willmar Schwabe Thyroidinum 3X Tablet 20 gm",
    category: "homeo",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "SBL CLEARSTONE DROPS 30ML",
    category: "homeo",
    image: p3_img,
    new_price: 160.0,
    old_price: 190.5,
  },
  {
    id: 4,
    name: "SBL Nixocid Tablets 25 gm",
    category: "homeo",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Dr. Reckeweg BC 21 Tablet 20 gm",
    category: "homeo",
    image: p5_img,
    new_price: 285.0,
    old_price: 320.5,
  },
  {
    id: 6,
    name: "Hapdco Gripe Mixture Syrup 150 ml",
    category: "homeo",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Lord's L 118 Diabetes Drops 30 ml",
    category: "homeo",
    image: p7_img,
    new_price: 145.0,
    old_price: 190.5,
  },
  {
    id: 8,
    name: "Lord's Graphitis Ointment 25 gm",
    category: "homeo",
    image: p8_img,
    new_price: 85.0,
    old_price: 100.5,
  },
  {
    id: 9,
    name: "Lord's Koughcure Syrup 450 ml",
    category: "homeo",
    image: p9_img,
    new_price: 285.0,
    old_price: 320.5,
  },
  {
    id: 10,
    name: "Lord's Gastrolin Syrup 450 m",
    category: "homeo",
    image: p10_img,
    new_price: 385.0,
    old_price: 420.5,
  },
  {
    id: 11,
    name: "Dr. Reckeweg Calcarea Phosphorica 6X Tablet 20 gm",
    category: "homeo",
    image: p11_img,
    new_price: 485.0,
    old_price:550.5,
  },
  {
    id: 12,
    name: "Medisynth Soriafit Cream 20 gm",
    category: "homeo",
    image: p12_img,
    new_price: 385.0,
    old_price: 420.5,
  },
  {
    id: 13,
    name: "Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
    category: "health",
    image: p13_img,
    new_price: 785.0,
    old_price: 820.5,
  },
  {
    id: 14,
    name: "Aveeno Baby Soothing Relief Moisture Cream - 227g",
    category: "health",
    image: p14_img,
    new_price: 1085.0,
    old_price: 1220.5,
  },
  {
    id: 15,
    name: "Liveasy Wellness Diabetic Protein Powder Chocolate Flavour 400g",
    category: "health",
    image: p15_img,
    new_price: 685.0,
    old_price: 720.5,
  },
  {
    id: 16,
    name: "Dr Morepen Gluco Onebg 03 Blood Glucose Test Strip Box Of 25 No'S",
    category: "health",
    image: p16_img,
    new_price: 155.0,
    old_price: 190.5,
  },
  {
    id: 17,
    name: "Pharmeasy Pill Box Organizer",
    category: "health",
    image: p17_img,
    new_price: 245.0,
    old_price: 340.5,
  },
  {
    id: 18,
    name: "Pharmeasy All-In -One Vaporizer",
    category: "health",
    image: p18_img,
    new_price: 585.0,
    old_price: 640.5,
  },
  {
    id: 19,
    name: "Liveasy Ortho Care Grey Waist Trimmer / Abdominal Binder - Medium (32-36 Inch)",
    category: "health",
    image: p19_img,
    new_price: 885.0,
    old_price: 920.5,
  },
  {
    id: 20,
    name: "Liveasy Ortho Care Cool Eye Mask - Provides Relief To Stressed & Dry Eyes - Reduces Dark Circles",
    category: "health",
    image: p20_img,
    new_price: 685.0,
    old_price: 720.5,
  },
  {
    id: 21,
    name: "Pharmeasy Hot Water Bag - Relieves Pain - Relaxes Sore Muscles - Improves Blood Supply - Blue - 2l",
    category: "health",
    image: p21_img,
    new_price: 185.0,
    old_price: 220.5,
  },
  {
    id: 22,
    name: "Liveasy Essentials Tongue Cleaner (Pack Of 2)",
    category: "health",
    image: p22_img,
    new_price: 285.0,
    old_price: 320.5,
  },
  {
    id: 23,
    name: "Otrivin Paediatric 0.05 % Nasal Drops 10 Ml",
    category: "health",
    image: p23_img,
    new_price: 465.0,
    old_price: 520.5,
  },
  {
    id: 24,
    name: "Everherb (By Pharmeasy) Amla - Immunity Booster Capsules - Natural Vitamin C - Bottle Of 60",
    category: "health",
    image: p24_img,
    new_price: 235.0,
    old_price: 320.5,
  },
  {
    id: 25,
    name: "AHAGLOW S FOAMING Face Wash 100ml",
    category: "personal",
    image: p25_img,
    new_price: 850.0,
    old_price: 920.5,
  },
  {
    id: 26,
    name: "AHAGLOW GENTLE SKIN Cleanser 125ml",
    category: "personal",
    image: p26_img,
    new_price: 865.0,
    old_price: 1200.5,
  },
  {
    id: 27,
    name: "Vegetal Glossage SPF-25 Instant Daily White-Glow Correct Complexion Cream 25 gm",
    category: "personal",
    image: p27_img,
    new_price: 985.0,
    old_price: 1020.5,
  },
  {
    id: 28,
    name: "Beardo Daily Defence Pollution Shield Ultra Light Face Cream 50gm",
    category: "personal",
    image: p28_img,
    new_price: 456.0,
    old_price: 760.5,
  },
  {
    id: 29,
    name: "Candid Dusting Powder 120 gm",
    category: "personal",
    image: p29_img,
    new_price: 235.0,
    old_price: 567.5,
  },
  {
    id: 30,
    name: "Dettol Antiseptic Liquid 1 ltr",
    category: "personal",
    image: p30_img,
    new_price: 485.0,
    old_price: 520.5,
  },
  {
    id: 31,
    name: "Himalaya Gentle Baby Wipes (Pack of 2 x 72's)",
    category: "personal",
    image: p31_img,
    new_price: 585.0,
    old_price: 770.5,
  },
  {
    id: 32,
    name: "CeraVe Hydrating Cleanser For Normal To Dry Skin 88 ml",
    category: "personal",
    image: p32_img,
    new_price: 175.0,
    old_price: 320.5,
  },
  {
    id: 33,
    name: "Scalpe Plus Anti Dandruff Shampoo 75 ml",
    category: "personal",
    image: p33_img,
    new_price: 335.0,
    old_price: 420.5,
  },
  {
    id: 34,
    name: "OurDaily Vitamin E Softgel Capsules 10's",
    category: "personal",
    image: p34_img,
    new_price: 185.0,
    old_price: 220.5,
  },
  {
    id: 35,
    name: "AccuSure Digital Thermometer (MT-1027)",
    category: "personal",
    image: p35_img,
    new_price: 585.0,
    old_price: 720.5,
  },
  {
    id: 36,
    name: "Prolyte ORS Liquid - Orange Flavour 200 ml",
    category: "personal",
    image: p36_img,
    new_price: 285.0,
    old_price: 420.5,
  },
];

export default all_product;
