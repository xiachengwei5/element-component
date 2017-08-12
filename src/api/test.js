import fetch from '../utils/fetch';

export function fetchList(query) {
    return fetch({
        url: '/tests/lists',
        method: 'get',
        params: query
    });
}

export function addItem(item) {
    return fetch({
        url: '/tests',
        method: 'post',
        params: { item }
    });
}
export function modifyItem(item) {
    return fetch({
        url: '/tests',
        method: 'put',
        params: { item }
    });
}
export function deleteItem(id) {
    return fetch({
        url: '/tests',
        method: 'delete',
        params: { id }
    });
}

export function fetchDBTheaters(city, start, count) {
    let query = {
        apikey: '0b2bdeda43b5688921839c8ecb20399b',
        city: city || '深圳',
        start: start || 0,
        count: count || 20,
        client: 'somemessage',
        udid: 'udid'
    }
    return fetch({
        url: 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=深圳&start=0&count=200&client=somemessage&udid=udid',
        method: 'get',
        params: query
    });
}







// export default {
//     fetchList(query) {
//         return fetch({
//             url: '/tests/lists',
//             method: 'get',
//             params: query
//         });
//     },

//     addItem(item) {
//         return fetch({
//             url: '/tests',
//             method: 'post',
//             params: { item }
//         });
//     },
//     modifyItem(item) {
//         return fetch({
//             url: '/tests',
//             method: 'put',
//             params: { item }
//         });
//     },
//     deleteItem(id) {
//         return fetch({
//             url: '/tests',
//             method: 'delete',
//             params: { id }
//         });
//     },

//     fetchDBTheaters(city, start, count) {
//         let query = {
//             apikey: '0b2bdeda43b5688921839c8ecb20399b',
//             city: city || '深圳',
//             start: start || 0,
//             count: count || 20,
//             client: 'somemessage',
//             udid: 'udid'
//         }
//         return fetch({
//             url: '/test/lists',
//             method: 'get',
//             params: query
//         });
//     }

// }