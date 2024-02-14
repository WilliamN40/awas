import mongoose from 'mongoose';

const LaporanSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    judul: {
        type: String,
        required: true
    },
    lokasi: {
        type: String,
    },
    deskripsi: {
        type: String,
    },
    foto: {
        type: String,
    }
});

const Laporan = mongoose.models.Laporan || mongoose.model('Laporan', LaporanSchema);

export default Laporan;