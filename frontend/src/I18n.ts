import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    dashboard: {
                        'box.title': 'Coins',
                        'box.usd-brl': 'Dollar Real',
                        'box.btc-eur': 'Bitcoin Euro',
                        'box.btc-usd': 'Bitcoin Dollar',

                        'list.usd-brl': 'American Dollar',
                        'list.eur-brl': 'Euro',
                        'list.btc-brl': 'Bitcoin',
                        'list.title': 'Quotation',

                        'list.label.coins': 'Coin',
                        'list.label.min.long': 'Minimun',
                        'list.label.min.short': 'Min',
                        'list.label.max.long': 'Maximun',
                        'list.label.max.short': 'Max',
                        'list.label.var.long': 'Variation',
                        'list.label.var.short': 'Var',
                    },
                    notfound: {
                        title: "There's nothing here.",
                        body: "Whatever you were looking for doesn't currently exist at this address. Unless you were looking for this error page, in which case: Congrats! You totally found it.",
                    },
                    yup: {
                        'email.invalid': 'Email should have correct format',
                        'email.required': 'Email is a required field',

                        'password.weak':
                            'the password must contain at least 1 number, at least 1 lower case letter, at least 1 upper case and at least 1 special character.',

                        'password.short':
                            'Password is too short - must be 8 chars minimum.',
                    },
                    login: {
                        'header.title': 'Hello! Welcome Back.',
                        'header.subtitle':
                            'Please Login with the data inserted during registration',

                        'email.label': 'Email',
                        'email.placeholder': 'Example@email.com',
                        'password.label': 'Password',
                        'password.placeholder': 'Enter Password',
                        'password.forgot': 'Forgot password?',

                        'submit.button': 'Login',
                    },
                    navbar: {
                        activity: 'QUOTATIONS',
                    },
                },
            },
            pt: {
                translation: {
                    dashboard: {
                        'box.title': 'Moedas',
                        'box.usd-brl': 'Dolar Real',
                        'box.btc-eur': 'Bitcoin Euro',
                        'box.btc-usd': 'Bitcoin Dolar',

                        'list.usd-brl': 'D??lar Americano',
                        'list.btc-eur': 'Euro',
                        'list.btc-usd': 'Bitcoin',
                        'list.title': 'Cota????es',

                        'list.label.coins': 'Moeda',
                        'list.label.min.long': 'M??nimo',
                        'list.label.min.short': 'Min',
                        'list.label.max.long': 'M??ximo',
                        'list.label.max.short': 'Max',
                        'list.label.var.long': 'Varia????o',
                        'list.label.var.short': 'Var',
                    },
                    notfound: {
                        title: 'N??o h?? nada aqui.',
                        body: 'Seja l?? o que voc?? estiver procurando n??o existe nesse endere??o. A menos que voc?? estava procurando por essa p??gina de Erro, nesse caso: Parab??ns! Voc?? com certeza encontrou ela.',
                    },
                    yup: {
                        'email.invalid': 'Email deve ter um formato v??lido',
                        'email.required': 'Email ?? um campo obrigat??rio',

                        'password.weak':
                            'A senha deve conter ao menos 1 n??mero, ao menos uma letra min??scula, ao menos 1 letra maisc??la e ao menos 1 caractere especial.',

                        'password.short':
                            'A senha ?? muita curta - ela deve ter 8 caracteres no m??nimo.',
                    },

                    login: {
                        'header.title': 'Ol??! Bem vindo de volta.',
                        'header.subtitle':
                            ' Fa??a Login com seus dados inseridos durante o registro.',

                        'email.label': 'E-mail',
                        'email.placeholder': 'Exemplo@email.com',
                        'password.label': 'Senha',
                        'password.placeholder': 'Digite a senha',
                        'password.forgot': 'Esqueceu a senha?',

                        'submit.button': 'Login',
                    },
                    navbar: {
                        activity: 'COTA????ES',
                    },
                },
            },
        },
    });

export default i18n;
