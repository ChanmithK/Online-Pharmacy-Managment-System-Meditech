const FIREBASE_CONFIG = require("../config/firebase.config");

const storage = FIREBASE_CONFIG.admin.storage();

const FIREBASE_STORAGE_BUCKET = "meditech-project.appspot.com/files";

const uploadFileToFirebaseStore = async ( file, fileName ) =>{
    try{
        const blob = storage.bucket(FIREBASE_STORAGE_BUCKET).file( fileName );

        // Create writable stream and specifying file mimetype
        const blobWriter = blob.createWriteStream({
            metadata: {
                contentType: file.mimetype,
            },
        });

        blobWriter.on('error', (err) =>{
            throw new Error();
        });

        blobWriter.on('finish', () => {
            // Assembling public URL for accessing the file via HTTP
            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
                FIREBASE_STORAGE_BUCKET
            }/o/${encodeURI(blob.name)}?alt=media`;

        });

        // When there is no more data to be consumed from the stream
        blobWriter.end(file.buffer);
        return true;

    }catch (e) {
        throw new Error(e);
    }
};

module.exports = {
    uploadFileToFirebaseStore
}