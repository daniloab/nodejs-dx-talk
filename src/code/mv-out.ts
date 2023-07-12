db.Charge.aggregate([
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: "$paidAt" } },
      totalValue: { $sum: "$valueWithDiscount" },
    },
  },
  {
    $out: "ChargeByDay",
  },
]);
