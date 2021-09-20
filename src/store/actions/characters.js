import axios from "axios";
import Characters from "../../models/characters";

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_CHARACTES = 'SET_CHARACTES';

export const fetchCharacters = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                'https://swapi.dev/api/people'
            )

            const resData = await response.data.results;
            const loadedCharacters = [];

            let images;
            let color;

            for (const key in resData) {
                switch (resData[key].name) {
                    case 'Luke Skywalker':
                        images = "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg"
                        color = "#41d95d"
                        break;
                    case 'C-3PO':
                        images = "https://cdn.ome.lt/4cEHoCFwJXdFY2o5Shx6uUcc14M=/1200x630/smart/extras/conteudos/c3po.png"
                        color = "#f5d142"
                        break;
                    case 'R2-D2':
                        images = "https://istoe.com.br/wp-content/uploads/sites/14/2017/06/ccdb6cdc0a9e7f5d37c5a621120b90eb7c77137c.jpg"
                        color = "#f5a442"
                        break;
                    case 'Darth Vader':
                        images = "https://sm.ign.com/t/ign_br/feature/s/star-wars-/star-wars-what-darth-vader-was-up-to-between-revenge-of-the_fkg8.h720.jpg"
                        color = "#f54242"
                        break;
                    case 'Leia Organa':
                        images = "https://www.skaditoys.com/wp-content/uploads/2019/01/1-17.jpg"
                        color = "#ffc7ff"
                        break;
                    case 'Owen Lars':
                        images = "https://www.personality-database.com/profile_images/80337.png"
                        color = "#47fced"
                        break;
                    case 'Beru Whitesun lars':
                        images = "https://static.wikia.nocookie.net/fanmade-works/images/8/8d/Beru_Lars.png/revision/latest?cb=20200317025929"
                        color = "#f5428d"
                        break;
                    case 'R5-D4':
                        images = "https://static.turbosquid.com/Preview/2020/11/06__17_03_12/Product1.jpgAC5FE421-A3B4-4DD0-B811-AEAA5642D041Large.jpg"
                        color = "#368dff"
                        break;
                    case 'Biggs Darklighter':
                        images = "https://static.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406"
                        color = "#9eecff"
                        break;
                    case 'Obi-Wan Kenobi':
                        images = "https://hqrock.files.wordpress.com/2019/08/obi-wan-lightsaber.jpg"
                        color = "#b9ffb0"
                        break;
                    default:
                }

                loadedCharacters.push(new Characters(
                    resData[key].created,
                    resData[key].name,
                    resData[key].height,
                    resData[key].gender,
                    resData[key].hair_color,
                    resData[key].skin_color,
                    resData[key].eye_color,
                    resData[key].birth_year,
                    images,
                    color
                ));
            };

            dispatch({
                type: SET_CHARACTES,
                characters: loadedCharacters
            });
        } catch (err) {
            throw (err);
        }
    };
};

export const toggleFavorite = (charId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                'https://swapi.dev/api/people'
            )

            const resData = await response.data.results;
            const resDataObj = resData.find(char => char.created === charId);

            dispatch({
                type: TOGGLE_FAVORITE,
                characterId: resDataObj.created
            })
        } catch (err) {
            throw (err)
        }
    };
};