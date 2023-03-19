import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema(
  {
    siteID: { type: String, required: true, unique: true },
    siteName: { type: String, required: true },
    materialPayment: { type: Number, required: true },
    labourPayment: { type: Number, required: true },
    otherPayment: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model('Expense', expenseSchema);
export default Expense;
