import * as cloudinary from "cloudinary";

cloudinary.config({
    cloud_name: 'dthjqdh6a',
    api_key: 159955541858565,
    api_secret: '8tQj3ijnClFkUHxwi-dN8OO-TPk',
});

export const cloud = (files) => {
    const promise = new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream((result) => {
            resolve(result);
        }).end(files);
    });

    return promise;
};

export const cloudvideo = (files) => {

    /*const promise = new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(files, (error, result) => error ? reject(error) : resolve(result));
    }, {
        resource_type: 'video',
    });*/

    const promise = new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({resource_type: 'video'}, (result) => {
            resolve(result);
        })
            .end(files);
    });

    return promise;
};

export const deleteCloudFile = (file_id) => {
    console.log('file id :: ', file_id);
    const promise = new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(file_id,
            (error, result) => {
                console.log('result :: ', result, 'error :: ', error);
                if (result) {
                    resolve(result);
                }
                if (error) {
                    reject(error);
                }
            });
    });

    return promise;
};
