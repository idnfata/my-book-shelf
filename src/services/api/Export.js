import axios from 'axios'
import { Auth, HR, PPKB, Asset } from './ResourceURL';

/* 
    ini adalah fungsi untuk menangani request GET API
    ketika request berhasil resolve dijalankan
    ketika request gagal reject dijalankan
*/
const Export = (url, path, token, fileName) => {
    // token = token.replace(/ /g,"");
    if(token){
        const config = {
            headers: { 'Authorization': `Bearer ${token}` },
            responseType: 'blob',
        };
        const promise = new Promise((resolve, reject) => {
            axios.get(`${ url === 'auth' ? Auth : url === 'hr' ? HR : url === 'asset' ? Asset : url === 'ppkb' ? PPKB : null }/${path}`, config).then((result) => {
                const url = window.URL.createObjectURL(new Blob([result.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                link.remove();
                resolve(true);
            }, (err) => {
                reject(err);
            })
        })
        return promise;

    }else {
        const config = {
            responseType: 'blob',
        };
        const promise = new Promise((resolve, reject) => {
            axios.get(`${ url === 'auth' ? Auth : url === 'hr' ? HR : url === 'asset' ? Asset : url === 'ppkb' ? PPKB : null }/${path}`, config).then((result) => {
                const url = window.URL.createObjectURL(new Blob([result.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                link.remove();
                resolve(true);
            }, (err) => {
                reject(err);
            })
        })
        return promise;
    }

}

export default Export;
