module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    "tbl_products",
    {
      p_code: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },

      p_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },

      p_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      p_rem: {
        type: DataTypes.STRING(30),
      },
    },
    { timestamps: false }
  );

  products.associate = (models) => {
    products.hasMany(models.tbl_orders, { foreignKey: "o_pcode" });
  };

  return products;
};
