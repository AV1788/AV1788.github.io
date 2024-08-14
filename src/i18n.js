import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          main: {
            alcohol: 'Alcohol',
            drinks: 'Drinks',
            food: 'Food',
            cocktails: 'Cocktails',
          },
          header: {
            tapas: 'Tapas',
            toasts: 'Toasts',
            sandwiches: 'Sandwiches',
            gin: 'Gin',
            vodka: 'Vodka',
            whiskey: 'Whiskey',
            rum: 'Rum',
            cognac: 'Cognac & Brandy',
            cl_cocktails: 'Classic Cocktails',
            sm_cocktails: 'Summer Cocktails',
            milkshakes: 'Milkshakes',
            mocktails: 'Mocktails',
            lemonades: 'Natural Lemonades',
          },
          tapas: {
            name: {
              russianSalad: 'Russian Salad',
              asparagus: 'Asparagus and ham puff pastries',
              octopus: 'Galician-style octopus',
              eggs: 'Stuffed eggs',
              iberian: 'Iberian ham and melon skewers',
              marinera: 'Marinera',
            },
            description: {
              russianSalad: 'Boiled potato, carrot, piquillo pepper, peas, pickles, green olives, tuna/bonito, shrimp, boiled egg.',
              asparagus: 'Sheet puff pastry, asparagus, serrano jam, edam cheese, sesame.',
              octopus: 'Octopus leg, boiled potato, salt flakes, olive oil, red pepper.',
              eggs: 'Eggs, tuna, mayo.',
              iberian: 'Melon, serrano jam.',
              marinera: 'Russian salad, bread donuts, anchovy.',
            },
          },
          toasts: {
            name: {
              avocado: 'Avocado and anchovy',
              caprese: 'Caprese',
              eggplant: 'Eggplant and cod',
              spanishClass: 'Spanish classic',
              brie: 'Brie',
            },
            description: {
              avocado: 'Avocado, anchovy, cherry tomato.',
              caprese: 'Pesto, burrata, serrano jam, basil, balsamic vinegar.',
              eggplant: 'Roasted eggplant, garlic, smoked cod olive oil.',
              spanishClass: 'Grated tomato, serrano jam, olive oil.',
              brie: 'Roasted red pepper, brie cheese, honey(changeable), crushed walnuts.',

            }
          },
          sandwiches: {
            name: {
              cuban: 'Cuban sandwich',
              tuna: 'Tuna sandwich',
              blt: 'BLT',
              pearGorgon: 'Pear, gorgonzola and bacon sandwich'

            },
            description: {
              cuban: 'Dijon mustard, bread, sliced cooked jam, sliced salami, sliced roast pork, pickle, room temperature butter.',
              tuna: 'Tuna, mayo, cilantro, red onion, red pepper, capers, lemon juice, salt, black pepper.',
              blt: 'Bacon, tomato, lettuce, mayo, salt, pepper.',
              pearGorgon: 'Bacon/jam, half a pear, gorgonzola cheese, butter.',
              

            }
          },
          cl_cocktails: {
            description: {
              mojito: 'White rum, lime juice, sugar syrup, mint, kiwi syrup, sprite.',
              pornstar: 'Vanilla vodka, passion fruit liqueur, passion fruit purée, vanilla syrup, lime juice, egg white.',
              espresso: 'Gin/Bourbon/Vodka/Rum, coffee shot, coffee liqueur, caramel syrup, saline solution.',
              colada: 'White rum, coconut cream, pineapple juice.',
              daiquiri: 'White rum, maraschino liqueur, lime juice, sugar syrup, fruit purée.',
              margarita: 'Tequila, lime juice, triple sec, agave syrup.',
              whiskeySour: 'Rye whiskey, lemon juice, orange juice ,cane sugar syrup, egg white.',
              amaretto: 'Amaretto, applejack, lemon juice, cane sugar, egg white.',
              manhattan: 'Rye whiskey, sweet vermouth, bitter.',
              laMarina: 'Vanilla vodka, blue curacao liqueur, elderflower liqueur, lemon juice, lavender syrup, ml violet liqueur, Lambrusco.',
              moscow: 'Vodka, lime juice, ginger beer.',
              cosmopolitan: 'Vodka citron, orange liqueur, cranberry juice, lime juice.',
              pinkLady: 'Gin, applejack, lemon juice , grenadine, egg white.',
              negroni: 'Indigo gin, Luxardo Bitter Bianco, sweet vermouth, blueberry purée.',
              brambleberry: 'Rosé gin, blackberry liqueur, raspberry liqueur, sugar syrup, lemon juice.',
            }
          },
          sm_cocktails: {
            description: {
              oldCuban: 'Mint, falernum syrup, golden rum, lime juice, cava.',
              frenchberry: 'Indigo gin, lime juice, raspberry purée, soda.',
              collins: 'Indigo gin, grapefruit juice, lime juice, sugar syrup, orange bitter, tonic water.',
              aperol: 'Rose gin, Aperol, passion fruit syrup, pineapple juice, Lambrusco, flower water.',
              alisa: 'Gin, lichi liqueur, lemon juice, lime juice, aloe vera juice, sugar sirup, karkade, rose water.',
              creamy: 'Vodka cherry, maraschino, condensed milk, lime juice, cherry purée.',
              juneBug: 'Coconut liqueur, melon liqueur, banana liqueur, lime juice, pineapple juice.',
              bahama: 'White rum, golden rum, coconut liqueur, orange juice, pineapple juice, grenadine.',
              paloma: 'Tequila, grapefruit juice, lime juice, agave syrup, grapefruit soda.',
              transfusion: 'Citron vodka, lime juice, ginger ale, grape juice.',
              bellini: 'Peach purée, peach syrup, cava.',
              
            }
          },
          milkshakes: {
            name: {
              vanilla: 'Vanilla',
              strawberry: 'Strawberry',
              coconut: 'Coconut',
              chocolate: 'Chocolate',
              lotus: 'Lotus',
            },
            description: {
              vanilla: 'Milk, vanilla ice cream, vanilla syrup.',
              strawberry: 'Milk, strawberry puree, strawberry ice cream.',
              coconut: 'Milk, ice cream, coconut puree.',
              chocolate: 'Milk, chocolate ice cream, chocolate syrup.',
              lotus: 'Milk, vanilla ice cream, lotus syrup.',
            }
          },
          lemonades: {
            description: {
              brazilian: 'Lime, sugar syrup, condensed milk.',
              cooler: 'Lime juice, lemon juice, watermelon syrup, soda, grenadine.',
              isle: 'Blue curacao syrup, lime juice, lemon juice, soda.',
              kiwi: 'Kiwi syrup, cucumber syrup, lime juice, soda.',
            }
          },
          mocktails: {
            description: {
              virginDaiq: 'Sprite, lime juice, sugar syrup, fruit purée.',
              virginPina: 'Pineapple juice, coconut purée, coconut milk.',
              virginSun: 'Cranberry juice, grenadine, orange juice.',
              melody: 'Lime juice, melon syrup, elderflower tonic water.',
              apricot: 'Peach purée, orange juice, lemon juice.',
              bomb: 'Strawberry purée, orange juice, mango purée, pineapple juice, watermelon syrup.',
            }
          },
          
        }
      },
      ru: {
        translation: {
          main: {
            alcohol: 'Алкоголь',
            drinks: 'Напитки',
            food: 'Еда',
            cocktails: 'Коктейли',
          },
          header: {
            tapas: 'Закуски',
            toasts: 'Тосты',
            sandwiches: 'Сэндвичи',
            gin: 'Джин',
            vodka: 'Водка',
            whiskey: 'Виски',
            rum: 'Ром',
            cognac: 'Коньяк & Бренди',
            cl_cocktails: 'Классические коктейли',
            sm_cocktails: 'Летние коктейли',
            milkshakes: 'Молочные коктейли',
            mocktails: 'Безалкогольные коктейли',
            lemonades: 'Натуральные лимонады'
          },
          tapas: {
            name: {
              russianSalad: 'Оливье',
              asparagus: 'Слоёные пирожки со спаржей и ветчиной',
              octopus: 'Осьминог по-галицийски',
              eggs: 'Фаршированные яйца',
              iberian: 'Шпажки с иберийской ветчиной и дыней',
              marinera: 'Marinera',
            },
            description: {
              russianSalad: 'Отварной картофель, морковь, пикульо перец, горошек, соленые огурцы, зеленые оливки, тунец/бонито, креветки, вареные яйца.',
              asparagus: 'Лист слоеного теста, спаржа, хамон Серрано, сыр эдам, кунжут.',
              octopus: 'Нарезанная ножка осьминога, нарезанный отварной картофель, солевые хлопья, оливковое масло, красный перец.',
              eggs: 'Яйца, тунец, майонез.',
              iberian: 'Дыня, хамон серрано.',
              marinera: 'Оливье, хлебные пончики, анчоусы.',
  
            }
          },
          toasts: {
            name: {
              avocado: 'Авокадо и анчоусы',
              caprese: 'Капрезе',
              eggplant: 'Баклажан и треска',
              spanishClass: 'Испанская классика',
              brie: 'Бри',
            },
            description: {
              avocado: 'Авокадо, анчоусы, помидор черри.',
              caprese: 'Песто, буррата, хамон серрано, базилик, бальзамический уксус.',
              eggplant: 'Запечённый баклажан, чеснок, копчёная треска, оливковое масло.',
              spanishClass: 'Тёртые помидоры, хамон серрано, оливковое масло.',
              brie: 'Запечённый красный перец, сыр бри, мёд (по желанию), измельчённые грецкие орехи.',

            }
          },
          sandwiches: {
            name: {
              cuban: 'Кубинский сэндвич',
              tuna: 'Сэндвич с тунцом',
              blt: 'BLT',
              pearGorgon: 'Сэндвич с грушей, горгондзолой и беконом'

            },
            description: {
              cuban: 'Дижонская горчица, хлеб, нарезанная варёная ветчина, нарезанный салями, нарезанная запечённая свинина, маринованный огурец, масло комнатной температуры.',
              tuna: 'Тунец, майонез, кинза, красный лук, красный перец, каперсы, лимонный сок, соль, чёрный перец.',
              blt: 'Бекон, помидор, салат, майонез, соль, перец.',
              pearGorgon: 'Бекон/ветчина, половина груши, сыр горгондзола, масло.',
              

            }
          },
          cl_cocktails: {
            description: {
              mojito: 'Белый ром, сок лайма, сахарный сироп, мята, сироп киви, спрайт.',
              pornstar: 'Ванильная водка, ликер из маракуйи, пюре из маракуйи, ванильный сироп, сок лайма, белок.',
              espresso: 'Джин/Бурбон/Водка/Ром, шот кофе, кофейный ликер, карамельный сироп, солевой раствор.',
              colada: 'Белый ром, кокосовые сливки, ананасовый сок.',
              daiquiri: 'Белый ром, ликер maraschino, сок лайма, сахарный сироп, фруктовое пюре.',
              margarita: 'Текила, сок лайма, triple sec, сироп агавы.',
              whiskeySour: 'Ржаной виски, сок лимона, апельсиновый сок, сироп из тростникового сахара, белок.',
              amaretto: 'Амаретто, яблочный бренди, сок лимона, сироп тростникового сахара, белок.',
              manhattan: 'Ржаной виски, сладкий вермут, bitter.',
              laMarina: 'Ванильная водка, ликер blue curacao, ликер бузины, сок лимона, лавандовый сироп, сироп фиалки, Lambrusco.',
              moscow: 'Водка, сок лайма, имбирное пиво.',
              cosmopolitan: 'Водка citron, апельсиновый ликер, клюквенный сок, сок лайма.',
              pinkLady: 'Джин, яблочный бренди, сок лимона, гренадин, белок.',
              negroni: 'Джин indigo, Luxardo Bitter Bianco, сладкий вермут, черничное пюре.',
              brambleberry: 'Розовый джин, ежевичный ликер, малиновый ликер, сахарный сироп, сок лимона.',
            }
          },
          sm_cocktails: {
            description: {
              oldCuban: 'Мята, сиропа falernum, золотой ром, сок лайма, cava.',
              frenchberry: 'Джин indigo, сок лайма, пюре малины, сода.',
              collins: 'Джин indigo, сок грейпфрута, сок лайма, сахарный сироп, апельсиновый bitter, тоник.',
              aperol: 'Розовый джин, Aperol, сироп маракуйи, ананасовый сок, Lambrusco, цветочная вода.',
              alisa: 'Джин, ликер личи, сок лимона, сок лайма, сок алоэ вера, сахарный сироп, каркаде, розовая вода.',
              creamy: 'Черешневая водка, maraschino, сгущенное молоко, сок лайма, пюре черешни.',
              juneBug: 'Кокосовый ликер, ликер дыни, банановый ликер, сок лайма, ананасовый сок.',
              bahama: 'Белый ром, золотой ром, кокосовый ликер, апельсиновый сок, ананасовый сок, гренадин.',
              paloma: 'Текила, сок грейпфрута, сок лайма, сироп агавы, грейпфрутовая сода.',
              transfusion: 'Водка citron, сок лайма, имбирный эль, виноградный сок.',
              bellini: 'Персиковое, персиковый сироп, cava.',
              
            }
          },
          milkshakes: {
            name: {
              vanilla: 'Ванильный',
              strawberry: 'Клубничный',
              coconut: 'Кокосовый',
              chocolate: 'Шоколадный',
              lotus: 'Лотос',
            },
            description: {
              vanilla: 'Молоко, ванильное мороженое, ванильный сироп.',
              strawberry: 'Молоко, пюре клубники, клубничное мороженое.',
              coconut: 'Молоко, мороженое, пюре кокоса.',
              chocolate: 'Молоко, шоколадное мороженое, шоколадный сироп.',
              lotus: 'Молоко, ванильное мороженое, сироп лотоса.',
            }
          },
          lemonades: {
            description: {
              brazilian: 'Лайм, сахарный сироп, сгущенное молоко.',
              cooler: 'Сок лайма, сок лимона, сироп из арбуза, сода, гренадин.',
              isle: 'Сироп blue curacao, сок лайма, сок лимона, сода.',
              kiwi: 'Сироп киви, сироп огурца, сок лайма, сода.',
            }
          },
          mocktails: {
            description: {
              virginDaiq: 'Спрайт, сок лайма, сахарный сироп, фруктовое пюре.',
              virginPina: 'Сок ананаса, пюре кокоса, кокосовое молоко.',
              virginSun: 'Сок клюквы, гренадин, апельсиновый сок.',
              melody: 'Сок лайма, сироп дыни, тоник с цветами бузины.',
              apricot: 'Пюре абрикоса, апельсиновый сок, сок лимона.',
              bomb: 'Пюре клубники, апельсиновый сок, пюре манго, сок ананаса, сироп арбуза.',
            }
          },
        }
      },
      es: {
        translation: {
          main: {
            alcohol: 'Alcohol',
            drinks: 'Bebidas',
            food: 'Comida',
            cocktails: 'Cócteles',
          },
          header: {
            tapas: 'Tapas',
            toasts: 'Tostadas',
            sandwiches: 'Sándwiches',
            gin: 'Ginebra',
            vodka: 'Vodka',
            whiskey: 'Whisky',
            rum: 'Ron',
            cognac: 'Coñac & Brandy',
            cl_cocktails: 'Cócteles clásicos',
            sm_cocktails: 'Cócteles de verano',
            milkshakes: 'Batidos',
            mocktails: 'Cócteles sin alcohol',
            lemonades: 'Limonadas naturales'
          },
          tapas: {
            name: {
              russianSalad: 'Ensalada rusa',
              asparagus: 'Hojaldres de espárragos y jamón',
              octopus: 'Pulpo a la gallega',
              eggs: 'Huevos rellenos',
              iberian: 'Brochetas de jamón ibérico y melón',
              marinera: 'Marinera',
            },
            description: {
              russianSalad: 'Patata hervida, zanahoria, pimientos del piquillo, guisantes, pepinillos, aceitunas verdes, atún/bonito, gambas, huevos cocidos.',
              asparagus: 'Lámina de hojaldre, espárrago, jamón serrano, queso edam, sésamo.',
              octopus: 'Pierna de pulpo en rodajas, papa hervida en rodajas, copos de sal, aceite de oliva, pimentón rojo.',
              eggs: 'Huevos, atún, mayonesa.',
              iberian: 'Melón, jamón serrano.',
              marinera: 'Ensalada rusa, donuts de pan, anchoas.',
  
            }
          },
          toasts: {
            name: {
              avocado: 'Aguacate y anchoa',
              caprese: 'Caprese',
              eggplant: 'Berenjena y bacalao',
              spanishClass: 'Clásico español',
              brie: 'Brie',
            },
            description: {
              avocado: 'Aguacate, anchoas, tomate cherry.',
              caprese: 'Pesto, burrata, jamón serrano, albahaca, vinagre balsámico.',
              eggplant: 'Berenjena asada, ajo, bacalao ahumado, aceite de oliva.',
              spanishClass: 'Tomate rallado, jamón serrano, aceite de oliva.',
              brie: 'Pimiento rojo asado, queso brie, miel (opcional), nueces trituradas.',

            }
          },
          sandwiches: {
            name: {
              cuban: 'Sándwich cubano',
              tuna: 'Sándwich de atún',
              blt: 'BLT',
              pearGorgon: 'Sándwich de pera, gorgonzola y beicon'

            },
            description: {
              cuban: 'Mostaza de Dijon, pan, jamón cocido en rodajas, salami en rodajas, cerdo asado en rodajas, pepinillo, mantequilla a temperatura ambiente.',
              tuna: 'Atún, mayonesa, cilantro, cebolla roja, pimiento rojo, alcaparras, jugo de limón, sal, pimienta negra.',
              blt: 'Beicon, tomate, lechuga, mayonesa, sal, pimienta.',
              pearGorgon: 'Beicon/jamón, media pera, queso gorgonzola, mantequilla.',
              

            }
          },
          cl_cocktails: {
            description: {
              mojito: 'Ron blanco, jugo de lima, jarabe de azúcar, menta, jarabe de kiwi, sprite.',
              pornstar: 'Vodka de vainilla, licor de maracuyá, puré de maracuyá, jarabe de vainilla, jugo de lima, clara de huevo.',
              espresso: 'Ginebra/Bourbon/Vodka/Ron, shot de café, licor de café, jarabe de caramelo, solución salina.',
              colada: 'Ron blanco, crema de coco, jugo de piña.',
              daiquiri: 'Ron blanco, licor maraschino, jugo de lima, jarabe de azúcar, puré de frutas.',
              margarita: 'Tequila, jugo de lima, triple sec, jarabe de agave.',
              whiskeySour: 'Whiskey de centeno, jugo de limón, jugo de naranja, jarabe de azúcar de caña, clara de huevo.',
              amaretto: 'Amaretto, applejack, jugo de limón, jarabe de azúcar de caña, clara de huevo.',
              manhattan: 'Whiskey de centeno, vermut dulce, bitter.',
              laMarina: 'Vodka de vainilla, licor de curazao azul, licor de flor de saúco, jugo de limón, jarabe de lavanda, licor de violeta, Lambrusco.',
              moscow: 'Vodka, jugo de lima, cerveza de jengibre.',
              cosmopolitan: 'Vodka citron, licor de naranja, jugo de arándano, jugo de lima.',
              pinkLady: 'Ginebra, applejack, jugo de limón, granadina, clara de huevo.',
              negroni: 'Ginebra índigo, Luxardo Bitter Bianco, vermut dulce, puré de arándano.',
              brambleberry: 'Ginebra rosada, licor de mora, licor de frambuesa, jarabe de azúcar, jugo de limón.',
            }
          },
          sm_cocktails: {
            description: {
              oldCuban: 'Menta, jarabe de falernum, ron dorado, jugo de lima, cava.',
              frenchberry: 'Ginebra Indigo, jugo de lima, puré de frambuesa, soda.',
              collins: 'Ginebra Indigo, jugo de toronja, jugo de lima, jarabe de azúcar, bitter de naranja, agua tónica.',
              aperol: 'Ginebra rosa, Aperol, jarabe de maracuyá, jugo de piña, Lambrusco, agua de flor.',
              alisa: 'Ginebra, licor de lichí, jugo de limón, jugo de lima, jugo de aloe vera, jarabe de azúcar, karkadé, agua de rosas.',
              creamy: 'Vodka de cereza, maraschino, leche condensada, jugo de lima, puré de cereza.',
              juneBug: 'Licor de coco, licor de melón, licor de plátano, jugo de lima, jugo de piña.',
              bahama: 'Ron blanco, ron dorado, licor de coco, jugo de naranja, jugo de piña, grenadina.',
              paloma: 'Tequila, jugo de toronja, jugo de lima, jarabe de agave, soda de toronja.',
              transfusion: 'Vodka de limón, jugo de lima, ginger ale, jugo de uva.',
              bellini: 'Puré de durazno, jarabe de durazno, cava.',
              
            }
          },
          milkshakes: {
            name: {
              vanilla: 'Vainilla',
              strawberry: 'Fresa',
              coconut: 'Coco',
              chocolate: 'Chocolate',
              lotus: 'Loto',
            },
            description: {
              vanilla: 'Leche, helado de vainilla, jarabe de vainilla.',
              strawberry: 'Leche, puré de fresa, helado de fresa.',
              coconut: 'Leche, helado, puré de coco.',
              chocolate: 'Leche, helado de chocolate, jarabe de chocolate.',
              lotus: 'Leche, helado de vainilla, jarabe de lotus.',
            }
          },
          lemonades: {
            description: {
              brazilian: 'Lima, jarabe de azúcar, leche condensada.',
              cooler: 'Jugo de lima, jugo de limón, jarabe de sandía, soda, grenadina.',
              isle: 'Jarabe de curaçao azul, jugo de lima, jugo de limón, soda.',
              kiwi: 'Jarabe de kiwi, jarabe de pepino, jugo de lima, soda.',
            }
          },
          mocktails: {
            description: {
              virginDaiq: 'Sprite, jugo de lima, jarabe de azúcar, puré de fruta.',
              virginPina: 'Jugo de piña, puré de coco, leche de coco.',
              virginSun: 'Jugo de arándano, grenadina, jugo de naranja.',
              melody: 'Jugo de lima, jarabe de melón, agua tónica con flor de saúco.',
              apricot: 'Puré de albaricoque, jugo de naranja, jugo de limón.',
              bomb: 'Puré de fresa, jugo de naranja, puré de mango, jugo de piña, jarabe de sandía.',
            }
          },
        }
      },
      fr: {
        translation: {
          main: {
            alcohol: 'Alcool',
            drinks: 'Boissons',
            food: 'Nourriture',
            cocktails: 'Cocktails',
          },
          header: {
            tapas: 'Tapas',
            toats: 'Toast',
            sandwiches: 'Sandwichs',
            gin: 'Gin',
            vodka: 'Vodka',
            whiskey: 'Whisky',
            rum: 'Rhum',
            cognac: 'Cognac & brandy',
            cl_cocktails: 'Cocktails classiques',
            sm_cocktails: 'Cocktails d\'été',
            milkshakes: 'Milkshakes',
            mocktails: 'Cocktails sans alcool',
            lemonades: 'Limonades naturelles'
          },
          tapas: {
            name: {
              russianSalad: 'Salade russe',
              asparagus: 'Feuilletés aux asperges et jambon',
              octopus: 'Poulpe à la galicienne',
              eggs: 'Œufs farcis',
              iberian: 'Brochettes de jambon ibérique et melon',
              marinera: 'Marinera',
            },
            description: {
              russianSalad: 'Pomme de terre bouillie, carotte, poivrons piquillos, petits pois, cornichons, olives vertes, thon/bonite, crevettes, œufs durs.',
              asparagus: 'Feuille de pâte feuilletée, asperge, jambon serrano, fromage edam, sésame.',
              octopus: 'Tentacule de poulpe tranché, pomme de terre bouillie en tranches, flocons de sel, huile d*olive, piment rouge.',
              eggs: 'Œuf, thon, mayonnaise.',
              iberian: 'Melon, jambon serrano.',
              marinera: 'Salade russe, beignets de pain, anchois.',
  
            }
          },
          toasts: {
            name: {
              avocado: 'Avocat et anchois',
              caprese: 'Caprese',
              eggplant: 'Aubergine et morue',
              spanishClass: 'Classique espagnol',
              brie: 'Brie',
            },
            description: {
              avocado: 'Avocat, anchois, tomate cerise.',
              caprese: 'Pesto, burrata, jambon serrano, basilic, vinaigre balsamique.',
              eggplant: 'Aubergine rôtie, ail, morue fumée, huile d\'olive.',
              spanishClass: 'Tomate râpée, jambon serrano, huile d\'olive.',
              brie: 'Poivron rouge rôti, fromage brie, miel (au choix), noix concassées.',

            }
          },
          sandwiches: {
            name: {
              cuban: 'Sandwich cubain',
              tuna: 'Sandwich au thon',
              blt: 'BLT',
              pearGorgon: 'Sandwich à la poire, au gorgonzola et au bacon'

            },
            description: {
              cuban: 'Moutarde de Dijon, pain, jambon cuit en tranches, salami en tranches, porc rôti en tranches, cornichon, beurre à température ambiante.',
              tuna: 'Thon, mayonnaise, coriandre, oignon rouge, poivron rouge, câpres, jus de citron, sel, poivre noir // mélanger et mettre sur le pain.',
              blt: 'Bacon, tomate, laitue, mayonnaise, sel, poivre.',
              pearGorgon: 'Bacon/jambon, moitié de poire, fromage gorgonzola, beurre',
              

            }
          },
          cl_cocktails: {
            description: {
              mojito: 'Rhum blanc, jus de citron vert, sirop de sucre, menthe, sirop de kiwi, sprite.',
              pornstar: 'Vodka à la vanille, liqueur de fruit de la passion, purée de fruit de la passion, sirop de vanille, jus de citron vert, blanc d\'œuf.',
              espresso: 'Gin/Bourbon/Vodka/Rhum, shot de café, liqueur de café, sirop de caramel, solution saline.',
              colada: 'Rhum blanc, crème de coco, jus d\'ananas.',
              daiquiri: 'Rhum blanc, liqueur maraschino, jus de citron vert, sirop de sucre, purée de fruits.',
              margarita: 'Tequila, jus de citron vert, triple sec, sirop d\'agave.',
              whiskeySour: 'Whisky de seigle, jus de citron, jus d\'orange, sirop de sucre de canne, blanc d\'œuf.',
              amaretto: 'Amaretto, applejack, jus de citron, sirop de sucre de canne, blanc d\'œuf.',
              manhattan: 'Whisky de seigle, vermouth doux, bitter.',
              laMarina: 'Vodka à la vanille, liqueur de curaçao bleu, liqueur de sureau, jus de citron, sirop de lavande, liqueur de violette, Lambrusco.',
              moscow: 'Vodka, jus de citron vert, bière au gingembre.',
              cosmopolitan: 'Vodka citron, liqueur d\'orange, jus de canneberge, jus de citron vert.',
              pinkLady: 'Gin, applejack, jus de citron, grenadine, blanc d\'œuf.',
              negroni: 'Gin indigo, Luxardo Bitter Bianco, vermouth doux, purée de myrtille.',
              brambleberry: 'Gin rosé, liqueur de mûre, liqueur de framboise, sirop de sucre, jus de citron.',
            }
          },
          sm_cocktails: {
            description: {
              oldCuban: 'Menthe, sirop de falernum, rhum doré, jus de lime, cava.',
              frenchberry: 'Gin Indigo, jus de lime, purée de framboise, soda.',
              collins: 'Gin Indigo, jus de pamplemousse, jus de lime, sirop de sucre, bitter à l\'orange, eau tonique.',
              aperol: 'Gin rose, Aperol, sirop de fruit de la passion, jus d\'ananas, lambrusco, eau de fleur.',
              alisa: 'Gin, liqueur de litchi, jus de citron, jus de lime, jus d\'aloe vera, sirop de sucre, karkadé, eau de rose.',
              creamy: 'Vodka cerise, maraschino, lait concentré, jus de lime, purée de cerise.',
              juneBug: 'Liqueur de coco, liqueur de melon, liqueur de banane, jus de lime, jus d\'ananas.',
              bahama: 'Rhum blanc, rhum doré, liqueur de coco, jus d\'orange, jus d\'ananas, grenadine.',
              paloma: 'Tequila, jus de pamplemousse, jus de lime, sirop d\'agave, soda au pamplemousse.',
              transfusion: 'Vodka citron, jus de lime, ginger ale, jus de raisin.',
              bellini: 'Purée de pêche, sirop de pêche, cava.',
              
            }
          },
          milkshakes: {
            name: {
              vanilla: 'Vanille',
              strawberry: 'Fraise',
              coconut: 'Noix de coco',
              chocolate: 'Chocolat',
              lotus: 'Lotus',
            },
            description: {
              vanilla: 'Lait, glace à la vanille, sirop de vanille.',
              strawberry: 'Lait, purée de fraise, glace à la fraise.',
              coconut: 'Lait, glace, purée de coco.',
              chocolate: 'Lait, glace au chocolat, sirop au chocolat.',
              lotus: 'Lait, glace à la vanille, sirop de lotus.',
            }
          },
          lemonades: {
            description: {
              brazilian: 'Citron vert, sirop de sucre, lait concentré.',
              cooler: 'Jus de citron vert, jus de citron, sirop de pastèque, soda, grenadine.',
              isle: 'Sirop de curaçao bleu, jus de citron vert, jus de citron, soda.',
              kiwi: 'Sirop de kiwi, sirop de concombre, jus de citron vert, soda.',
            }
          },
          mocktails: {
            description: {
              virginDaiq: 'Sprite, jus de citron vert, sirop de sucre, purée de fruits.',
              virginPina: 'Jus d\'ananas, purée de coco, lait de coco.',
              virginSun: 'Jus de canneberge, grenadine, jus d\'orange.',
              melody: 'Jus de citron vert, sirop de melon, eau tonique à la fleur de sureau.',
              apricot: 'Purée d\'abricot, jus d\'orange, jus de citron.',
              bomb: 'Purée de fraise, jus d\'orange, purée de mangue, jus d\'ananas, sirop de pastèque.',
            }
          },
        }
      },
    }
  });

export default i18n;