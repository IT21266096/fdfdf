import mongoose from 'mongoose';

const revenueSchema = new mongoose.Schema(
  {
    siteId: { type: String, required: true, unique: true },
    siteName: { type: String, required: true },
    budgetPO:{type: Number, required: true},
    actualPO:{type: Number, required: true},
    invoice:{type: Number, required: true},
    toBeAmount:{type: Number, required: true},
    cashCollection:{type: Number, required: true},
    toBeCashCollection:{type: Number, required: true},
  },
  {
    timestamps: true,
  }
);

const Revenue = mongoose.model('Revenue', revenueSchema);
export default Revenue;
