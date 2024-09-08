var cost,
    lv1 = 1678,
    lv2 = 1734,
    lv3 = 2014,
    lv4 = 2536,
    lv5 = 2834,
    lv6 = 2927;

const handlePriceElectricity = (kWh) => {
    if (kWh <= 0 || typeof kWh !== "number" || isNaN(kWh)) return "Số kWh không hợp lệ";
    if (kWh <= 50) cost = kWh * lv1;
    else if (kWh <= 100) cost = 50 * lv1 + (kWh - 50) * lv2;
    else if (kWh <= 200) cost = 50 * lv1 + 50 * lv2 + (kWh - 100) * lv3;
    else if (kWh <= 300) cost = 50 * lv1 + 50 * lv2 + 100 * lv3 + (kWh - 200) * lv4;
    else if (kWh <= 400) cost = 50 * lv1 + 50 * lv2 + 100 * lv3 + 100 * lv4 + (kWh - 300) * lv5;
    else cost = 50 * lv1 + 50 * lv2 + 100 * lv3 + 100 * lv4 + 100 * lv5 + (kWh - 400) * lv6;

    return cost;
};

console.log(handlePriceElectricity(200)); // 2534000
