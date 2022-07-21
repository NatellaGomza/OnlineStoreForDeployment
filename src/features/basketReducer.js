const initState = {
  header: 'Детские очки для зрения',
  categoryInfo: [
    { id: 1, url: "opravy-2-3-goda", src: "https://www.optikakids.by/wp-content/uploads/2021/12/round_baby_silicone.jpg", header: "ДЕТСКИЕ ОЧКИ ДЛЯ МАЛЫШЕЙ", age: "от 0 до 3-х лет", name: "Детские очки для малышей" },
    { id: 2, url: "dlya-devochek", src: "https://www.optikakids.by/wp-content/uploads/2021/12/round_girl.jpg", header: "ОЧКИ ДЛЯ ДЕВОЧЕК", age: "от 4-х до 12 лет", name: "Очки для девочек" },
    { id: 3, url: "dlya-malchikov", src: "https://www.optikakids.by/wp-content/uploads/2021/12/round_boy_22.jpg", header: "ОЧКИ ДЛЯ МАЛЬЧИКОВ", age: "от 4-х до 12 лет", name: "Очки для мальчиков" },
    { id: 4, url: "dlya-podrostkov", src: "https://www.optikakids.by/wp-content/uploads/2021/12/round_girl_chb.jpg", header: "СТИЛЬНЫЕ ОЧКИ ДЛЯ ПОДРОСТКОВ", age: "от 13-ти до 18 лет", name: "Стильные очки для подростков" },
    { id: 5, url: "", src: "https://www.optikakids.by/wp-content/uploads/2021/12/round_boy_sunglasses.jpg", header: "МАЛЬЧИКИ И ДЕВОЧКИ", age: "от 0 до 18 лет", name: "Все модели" },
  ],
  products: [
    { id: 1, category: "opravy-2-3-goda", producer: "Hello Kitty (Франция)", model: "Оправа для девочки AA101с14", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/hkaa101c14-44-16-120.jpg" },
    { id: 2, category: "opravy-2-3-goda", producer: "Spider-Man", model: "Оправа для мальчика AA038С07", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DS-AA038c07-43-16-125.jpg" },
    { id: 3, category: "opravy-2-3-goda", producer: "Cars, Disney (Франция) ", model: "Оправа для мальчика AA011С01", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DCAA011C01-44-15-125.jpg" },
    { id: 4, category: "opravy-2-3-goda", producer: "Hello Kitty (Франция) ", model: "Оправа для девочки HEAA056C14", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/heaa056s14-40-16-120.jpg" },
    { id: 5, category: "opravy-2-3-goda", producer: "Cars, Disney (Франция)", model: "Оправа для мальчика II003С07", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DC-II003c07-43-15-118.jpg" },
    { id: 6, category: "opravy-2-3-goda", producer: "Cars, Disney (Франция)", model: "Оправа для мальчика GR001С06", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DC-II003c07-43-15-118.jpg" },
    { id: 7, category: "opravy-2-3-goda", producer: "Hello Kitty (Франция)", model: "Оправа для девочки HKAA122с08", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/HK-AA122C08-45-17-120.jpg" },
    { id: 8, category: "opravy-2-3-goda", producer: "SWING (Турция)", model: "Детская оправа Tr161 P232", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/Tr161-41-14-100-P232.jpg" },
    { id: 9, category: "opravy-2-3-goda", producer: "Hello Kitty (Франция)", model: "Оправа для девочки HEAA059C09", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/heaa059s09-41-17-120.jpg" },
    { id: 10, category: "opravy-2-3-goda", producer: "Hello Kitty (Франция)", model: "Оправа для девочки HEAA051C08", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/heaa051s08-44-15-120.jpg" },
    { id: 11, category: "opravy-2-3-goda", producer: "Hello Kitty (Франция) ", model: "Оправа для девочки AA104с68", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/HKAA104c68-44-15-115.jpg" },
    { id: 12, category: "opravy-2-3-goda", producer: "Spider-Man", model: "Оправа для мальчика AA003C16", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/dsaa003-c16-43-17-120.jpg" },
    { id: 13, category: "opravy-2-3-goda", producer: "Spider-Man", model: "Оправа для мальчика AA028С06", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DS-AA028c06-43-15-120.jpg" },
    { id: 14, category: "opravy-2-3-goda", producer: "Cars, Disney (Франция)", model: "Оправа для мальчика AM009С01", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DCAM009C01-43-17-120.jpg" },
    { id: 15, category: "opravy-2-3-goda", producer: "Cars, Disney (Франция) ", model: "Оправа для мальчика AA049С06", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DCAA049C06-42-17-120.jpg" },
    { id: 16, category: "dlya-devochek", producer: "GRACE", model: "Оправа для девочки 0257 С5", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0257-48-18-142-S5.jpg" },
    { id: 17, category: "dlya-devochek", producer: "GRACE", model: "Оправа для девочки 0258 С4", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0258-47-17-142-S4.jpg" },
    { id: 18, category: "dlya-devochek", producer: "LuluCastagnette (Франция)", model: "Оправа для девочки MM130C04", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/MM130-c04-49-18-135.jpg" },
    { id: 19, category: "dlya-devochek", producer: "GRACE", model: "Оправа для девочки 0258 С6", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0258-47-17-142-S6.jpg" },
    { id: 20, category: "dlya-devochek", producer: "Hello Kitty (Франция)", model: "Оправа для девочки HKAA122с08", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/HK-AA122C08-45-17-120.jpg" },
    { id: 21, category: "dlya-devochek", producer: "GRACE", model: "Оправа для девочки 0259 С1", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0259-48-18-142-S1.jpg" },
    { id: 22, category: "dlya-devochek", producer: "GRACE", model: "Оправа для девочки 0259 С3", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0259-48-18-142-S3.jpg" },
    { id: 23, category: "dlya-devochek", producer: "Hello Kitty (Франция)", model: "Оправа для девочки HEAA056C14", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/heaa056s14-40-16-120.jpg" },
    { id: 24, category: "dlya-devochek", producer: "GRACE", model: "Оправа для девочки 0259 С5", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0259-48-18-142-S5.jpg" },
    { id: 25, category: "dlya-devochek", producer: "GRACE", model: "Оправа для девочки 0260 С2", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0260-48-17-142-S2.jpg" },
    { id: 26, category: "dlya-devochek", producer: "Hello Kitty (Франция)", model: "Оправа для девочки AA101с14", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/hkaa101c14-44-16-120.jpg" },
    { id: 27, category: "dlya-devochek", producer: "GRACE", model: "Оправа для девочки 0260 С4", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0260-48-17-142-S4.jpg" },
    { id: 28, category: "dlya-devochek", producer: "GRACE", model: "Оправа для девочки 0260 С11", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0260-48-17-142-S11.jpg" },
    { id: 29, category: "dlya-devochek", producer: "Hello Kitty (Франция)", model: "Оправа для девочки II010с09", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/hkii010c09-47-17-130.jpg" },
    { id: 30, category: "dlya-devochek", producer: "GRACE", model: "Оправа для девочки 0257 С5", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0257-48-18-142-S5.jpg" },
    { id: 31, category: "dlya-malchikov", producer: "Avengers (Франция)", model: "Оправа для мальчика AA037C01", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/DA-AA037-C01-48-15-125.jpg" },
    { id: 32, category: "dlya-malchikov", producer: "Spider-Man", model: "Оправа для мальчика AA038С07", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DS-AA038c07-43-16-125.jpg" },
    { id: 33, category: "dlya-malchikov", producer: "Cars, Disney (Франция)", model: "Оправа для мальчика AA011С01", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DCAA011C01-44-15-125.jpg" },
    { id: 34, category: "dlya-malchikov", producer: "Cars, Disney (Франция)", model: "Оправа для мальчика II003С07", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DC-II003c07-43-15-118.jpg" },
    { id: 35, category: "dlya-malchikov", producer: "Cars, Disney (Франция) ", model: "Оправа для мальчика GR001С06", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DS-GR001c06-43-13-118.jpg" },
    { id: 36, category: "dlya-malchikov", producer: "New York Yankees (Франция)", model: "Оправа для мальчика MA016C01", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/NYma016c01-49-17-140.jpg" },
    { id: 37, category: "dlya-malchikov", producer: "New York Yankees (Франция)", model: "Оправа для мальчика NYII014С01", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/II014c01-52-18-140.jpg" },
    { id: 38, category: "dlya-malchikov", producer: "Avengers (Франция)", model: "Оправа для мальчика AA037C07", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/daaa037c07-48-15-125.jpg" },
    { id: 39, category: "dlya-malchikov", producer: "New York Yankees (Франция)", model: "Оправа для мальчика AA123C01", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/AAA123-c01-49-16-135.jpg" },
    { id: 40, category: "dlya-malchikov", producer: "SWING (Турция)", model: "Оправа для мальчика Tr161 P232", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/Tr161-41-14-100-P232.jpg" },
    { id: 41, category: "dlya-malchikov", producer: "Spider-Man ", model: "Оправа для мальчика AA003C16", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/dsaa003-c16-43-17-120.jpg" },
    { id: 42, category: "dlya-malchikov", producer: "Spider-Man", model: "Оправа для мальчика AA017C17", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/dsaa017c17-46-15-125.jpg" },
    { id: 43, category: "dlya-malchikov", producer: "Spider-Man", model: "Оправа для мальчика AA026C67", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/11/DS-AA026-C67-47-15-130.jpg" },
    { id: 44, category: "dlya-malchikov", producer: "Spider-Man", model: "Оправа для мальчика AA028С06", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DS-AA028c06-43-15-120.jpg" },
    { id: 45, category: "dlya-malchikov", producer: "GRACE", model: "Оправа для девочки 0260 С11", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0260-48-17-142-S11.jpg" },
    { id: 46, category: "dlya-podrostkov", producer: "GRACE", model: "Оправа для девочки 0260 С4", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0260-48-17-142-S4.jpg" },
    { id: 47, category: "dlya-podrostkov", producer: "GRACE", model: "Оправа для девочки 0260 С2", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0260-48-17-142-S2.jpg" },
    { id: 48, category: "dlya-podrostkov", producer: "GRACE", model: "Оправа для девочки 0259 С5", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0259-48-18-142-S5.jpg" },
    { id: 49, category: "dlya-podrostkov", producer: "GRACE", model: "Оправа для девочки 0259 С3", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0259-48-18-142-S3.jpg" },
    { id: 50, category: "dlya-podrostkov", producer: "GRACE", model: "Оправа для девочки 0259 С1", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0259-48-18-142-S1.jpg" },
    { id: 51, category: "dlya-podrostkov", producer: "GRACE", model: "Оправа для девочки 0258 С6", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0258-47-17-142-S6.jpg" },
    { id: 52, category: "dlya-podrostkov", producer: "GRACE", model: "Оправа для девочки 0258 С5", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0258-47-17-142-S5.jpg" },
    { id: 53, category: "dlya-podrostkov", producer: "New York Yankees (Франция)", model: "Оправа для мальчика NYII014С01", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/II014c01-52-18-140.jpg" },
    { id: 54, category: "dlya-podrostkov", producer: "LuluCastagnette (Франция)", model: "Оправа для девочки MM130C04", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/MM130-c04-49-18-135.jpg" },
    { id: 55, category: "dlya-podrostkov", producer: "GRACE", model: "Оправа для девочки 0258 С4", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0258-47-17-142-S4.jpg" },
    { id: 56, category: "dlya-podrostkov", producer: "GRACE", model: "Оправа для девочки 0258 С5", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0257-48-18-142-S5.jpg" },
    { id: 57, category: "dlya-podrostkov", producer: "GRACE", model: "Оправа для девочки 0258 С3", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0257-48-18-142-S3.jpg" },
    { id: 58, category: "dlya-podrostkov", producer: "GRACE", model: "Оправа для девочки 0258 С21", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0254-47-19-143-S21.jpg" },
    { id: 59, category: "dlya-podrostkov", producer: "GRACE", model: "Оправа для девочки 0258 С15", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/12/0254-47-19-143-S15.jpg" },
    { id: 60, category: "dlya-podrostkov", producer: "Cars, Disney (Франция)", model: "Оправа для мальчика AM009С01", price: Math.trunc(Math.random() * 100), url: "https://www.optikakids.by/wp-content/uploads/2021/10/DCAM009C01-43-17-120.jpg" },
  ],
  basket: [],
};

function basketReducer(state = initState, action) {
  let item = action.payload;

  switch (action.type) {

    case "addToCart": {
      let newState = { ...state }
      newState.basket = item;

      return newState;
    }

    case "deleteFromCart": {
      let newState = {...state};
      newState.basket = newState.basket.filter(el => el.id !== item.id);

      return newState;
    }

    default:
      return state;
  }
}

export default basketReducer;
