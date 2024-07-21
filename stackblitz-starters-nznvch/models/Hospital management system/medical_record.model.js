import mongoose from 'mongoose';
const medical_reportSchema = new mongoose.Schema({}, { timestamps: true });
export const Medical_report = mongoose.model(
  'Medical_report',
  medical_reportSchema
);
