import mongoose from 'mongoose';

const overallStatSchema = new mongoose.Schema(
  {
    siteId: { type: 'string', required: true, unique: true },
    totalExpenses: Number,
    totalRevenue: Number,
    monthlyData: [
      {
        month: String,
        totalExpenses: Number,
        totalRevenue: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalExpenses: Number,
        totalRevenue: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const overallStat = mongoose.model('overallStat', overallStatSchema);
export default overallStat;
