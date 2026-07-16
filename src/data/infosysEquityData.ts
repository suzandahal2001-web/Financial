// All data extracted from Infosys_Company_Profile.xlsx and Infosys.xlsx
// No values invented or estimated — every figure comes directly from the Excel files.

// ============================================================
// RATIO ANALYSIS (from Infosys.xlsx → "Ratio Analysis" sheet)
// ============================================================

export const ratioAnalysisYears = ['FY16', 'FY17', 'FY18', 'FY19', 'FY20', 'FY21', 'FY22', 'FY23', 'FY24', 'FY25'];

export const growthRatios = [
  { name: 'Sales Growth', values: [null, 0.0968, 0.0298, 0.1723, 0.0982, 0.1066, 0.2107, 0.2066, 0.0470, 0.0606] },
  { name: 'EBITDA Growth', values: [null, 0.0893, 0.0117, 0.0716, 0.1040, 0.2525, 0.1292, 0.1156, 0.0369, 0.0772] },
  { name: 'EBIT Growth', values: [null, 0.0820, 0.0034, 0.0708, 0.0575, 0.2720, 0.1387, 0.1009, 0.0214, 0.0873] },
  { name: 'Net Profit Growth', values: [null, 0.0901, 0.1252, -0.0149, 0.1044, 0.2447, 0.1527, 0.0784, 0.0061, 0.0749] },
  { name: 'Dividend Growth', values: [null, 0.0619, 0.6896, -0.0258, -0.1739, 0.5437, 0.1487, 0.0968, 0.3535, -0.0649] },
];

export const profitabilityRatios = [
  { name: 'Gross Margin', values: [0.3515, 0.3486, 0.3421, 0.3293, 0.3148, 0.3183, 0.3027, 0.2854, 0.2840, 0.2847] },
  { name: 'EBITDA Margin', values: [0.2735, 0.2717, 0.2669, 0.2440, 0.2453, 0.2776, 0.2589, 0.2394, 0.2370, 0.2407] },
  { name: 'EBIT Margin', values: [0.2502, 0.2468, 0.2405, 0.2196, 0.2134, 0.2451, 0.2303, 0.2106, 0.2066, 0.2112] },
  { name: 'EBT Margin', values: [0.2502, 0.2468, 0.2405, 0.2196, 0.2115, 0.2431, 0.2287, 0.2086, 0.2035, 0.2087] },
  { name: 'Net Profit Margin', values: [0.1661, 0.1650, 0.1803, 0.1515, 0.1524, 0.1714, 0.1632, 0.1459, 0.1402, 0.1420] },
];

export const efficiencyRatios = [
  { name: 'Return on Capital Employed', values: [0.2530, 0.2450, 0.2612, 0.2796, 0.2764, 0.3015, 0.3466, 0.3692, 0.3291, 0.3309] },
  { name: 'Return on Equity', values: [0.1679, 0.1639, 0.1959, 0.1929, 0.2114, 0.2256, 0.2635, 0.2839, 0.2444, 0.2416] },
  { name: 'Debtor Turnover', values: [5.5111, 5.5579, 5.3662, 5.5760, 4.9111, 5.2074, 5.3591, 5.7728, 5.0896, 5.2311] },
  { name: 'Creditor Turnover', values: [4.6758, 4.8344, 4.8885, 4.3245, 4.1806, 3.8890, 3.3879, 3.5893, 3.7586, 3.7255] },
  { name: 'Fixed Asset Turnover', values: [4.6646, 4.8300, 5.6086, 5.2626, 3.8165, 3.9393, 4.7148, 5.0220, 5.5633, 5.2644] },
  { name: 'Capital Turnover', values: [1.0113, 0.9928, 1.0862, 1.2729, 1.3872, 1.3159, 1.6143, 1.9463, 1.7440, 1.7010] },
];

export const liquidityRatios = [
  { name: 'Interest Coverage', values: [0, 0, 0, 0, 113.96, 126.27, 140.08, 108.82, 67.55, 82.75] },
  { name: 'Debtor Days', values: [66.23, 65.67, 68.02, 65.46, 74.32, 70.09, 68.11, 63.23, 71.72, 69.78] },
  { name: 'Payable Days', values: [78.06, 75.50, 74.66, 84.40, 87.31, 93.85, 107.74, 101.69, 97.11, 97.97] },
  { name: 'Cash Conversion Cycle (Days)', values: [-11.83, -9.83, -6.65, -18.94, -12.99, -23.76, -39.63, -38.46, -25.40, -28.20] },
  { name: 'CFO/Sales', values: [0.1294, 0.1369, 0.1886, 0.1740, 0.1612, 0.2388, 0.1846, 0.1099, 0.1310, 0.2172] },
  { name: 'CFO/Total Assets', values: [0.1076, 0.1128, 0.1676, 0.1712, 0.1594, 0.2232, 0.1924, 0.1294, 0.1465, 0.2395] },
  { name: 'CFO/Total Debt', values: [0, 0, 0, 0, 3.159, 4.506, 4.103, 1.943, 2.408, 4.303] },
];

// ============================================================
// FORECASTING (from Infosys.xlsx → "Forecasting" sheet)
// ============================================================

export const forecastYears = ['FY16', 'FY17', 'FY18', 'FY19', 'FY20', 'FY21', 'FY22', 'FY23', 'FY24', 'FY25', 'FY26F', 'FY27F', 'FY28F', 'FY29F', 'FY30F'];

export const salesForecast = [
  62441, 68484, 70522, 82675, 90791, 100472, 121641, 146767, 153670, 162990,
  173013.53, 185189.58, 197365.62, 209541.66, 221717.70,
];

export const salesForecastGrowth = [
  null, 0.0968, 0.0298, 0.1723, 0.0982, 0.1066, 0.2107, 0.2066, 0.0470, 0.0606,
  0.0615, 0.0704, 0.0657, 0.0617, 0.0581,
];

export const netProfitForecast = [
  13489, 14353, 16029, 15404, 16594, 19351, 22110, 24095, 26233, 26713,
  28283.13, 29891.50, 31499.87, 33108.24, 34716.61,
];

export const netProfitForecastGrowth = [
  null, 0.0641, 0.1168, -0.0390, 0.0773, 0.1661, 0.1426, 0.0898, 0.0887, 0.0183,
  0.0588, 0.0569, 0.0538, 0.0511, 0.0486,
];

export const epsForecast = [
  0.0443, 0.0406, 0.0343, 0.0349, 0.0308, 0.0247, 0.0212, 0.0194, 0.0193, 0.0179,
  0.0118, 0.0087, 0.0056, 0.0025, -0.0005,
];

export const epsForecastGrowth = [
  null, -0.0826, -0.1549, 0.0153, -0.1173, -0.1963, -0.1434, -0.0855, -0.0055, -0.0691,
  -0.3429, -0.2616, -0.3542, -0.5486, -1.2152,
];

export const ebitdaForecast = [
  17079, 18604, 18822, 20170, 22267, 27889, 31491, 35130, 36425, 39236,
  41554.13, 44252.83, 46951.53, 49650.22, 52348.92,
];

export const ebitdaForecastGrowth = [
  null, 0.0893, 0.0117, 0.0716, 0.1040, 0.2525, 0.1292, 0.1156, 0.0369, 0.0772,
  0.0591, 0.0649, 0.0610, 0.0575, 0.0544,
];

// ============================================================
// INTRINSIC GROWTH (from Infosys.xlsx → "Intrinsic Growth" sheet)
// ============================================================

export const intrinsicGrowthYears = ['FY21', 'FY22', 'FY23', 'FY24', 'FY25'];

export const roicData = {
  investedCapital: [42266, 42998, 52155, 57118, 55620],
  ebit: [24622, 28015, 30905, 31747, 34424],
  roic: [0.5825, 0.6515, 0.5926, 0.5558, 0.6189],
};

export const reinvestmentRateData = {
  netCapex: [2107, 2161, 2579, 2201, 2237],
  changeInWC: [null, 437, 5732, 6566, -4837],
  ebit: [24622, 28015, 30905, 31747, 34424],
  marginalTaxRate: [0.27, 0.27, 0.27, 0.27, 0.27],
  ebitAfterTax: [17974.06, 20450.95, 22560.65, 23175.31, 25129.52],
  reinvestment: [null, 2598, 8311, 8767, -2600],
  reinvestmentRate: [null, 0.1270, 0.3684, 0.3783, -0.1035],
  fourYearAverage: 0.1926,
  fourYearMedian: 0.2477,
};

export const intrinsicGrowthRateData = {
  reinvestmentRate: [null, 0.1270, 0.3684, 0.3783, -0.1035],
  roic: [null, 0.6515, 0.5926, 0.5558, 0.6189],
  intrinsicGrowth: [null, 0.0828, 0.2183, 0.2103, -0.0640],
  fourYearAverage: 0.1118,
  fourYearMedian: 0.1465,
};

// ============================================================
// DCF (from Infosys.xlsx → "DCF" sheet)
// ============================================================

export const dcfYears = ['FY25', 'FY26', 'FY27', 'FY28', 'FY29', 'FY30'];

export const dcfFCFF = {
  ebit: [37987, 41063.95, 44390.13, 47985.73, 51872.57, 56074.25],
  taxRate: [0.29, 0.29, 0.29, 0.29, 0.29, 0.29],
  ebitAfterTax: [26970.77, 29155.40, 31516.99, 34069.87, 36829.53, 39812.72],
  reinvestmentRate: [0.2477, 0.3098, 0.3719, 0.4339, 0.4960, 0.4960],
  fcff: [20289.83, 20123.56, 19797.24, 19286.01, 18562.08, 20065.61],
  midYearConvention: [null, 0.5, 1.5, 2.5, 3.5, 4.5],
  discountFactor: [null, 0.9625, 0.8916, 0.8260, 0.7651, 0.7088],
  pvOfFCFF: [null, 19368.52, 17651.41, 15929.44, 14202.60, 14222.53],
};

export const dcfAssumptions = {
  expectedGrowth: 0.081,
  terminalGrowth: 0.068,
  wacc: 0.07949,
};

export const dcfTerminalValue = {
  fcffN1: 21690.92,
  wacc: 0.07949,
  terminalGrowthRate: 0.068,
  terminalValue: 1888562.78,
};

export const dcfEquityValue = {
  pvOfFCFF: 81374.51,
  pvOfTerminalValue: 1338615.73,
  valueOfOperatingAssets: 1419990.24,
  addCash: 24455,
  lessDebt: 8227,
  valueOfEquity: 1436218.24,
  noOfShares: 415.44,
  equityValuePerShare: 3457.10,
  sharePrice: 1639,
  discountPremium: -0.5259,
};

export const dcfSensitivity = {
  waccValues: [0.04, 0.05, 0.068, 0.07, 0.08],
  tgValues: [0.03, 0.06, 0.0795, 0.09],
  matrix: [
    [-3465.85, 2085.33, 1171.85, 975.10],
    [-1615.46, 3935.72, 1489.44, 1160.13],
    [-738.95, -4391.05, 3453.01, 1917.11],
    [-690.26, -3465.85, 4130.50, 2085.33],
    [-505.22, -1615.46, -73780.80, 3935.72],
  ],
};

// ============================================================
// COMPARABLE VALUATION (from Infosys.xlsx → "Comps Val" sheet)
// ============================================================

export const comparableCompanies = [
  { company: 'Infosys', ticker: 'INFY', sharePrice: 1638.7, sharesOutstanding: 405.47, equityValue: 664443.69, netDebt: -15700, enterpriseValue: 648743.69, revenue: 169458, ebitda: 44059.08, netIncome: 28159, evRevenue: 3.83, evEbitda: 14.72, pe: 23.60 },
  { company: 'TCS', ticker: 'TCS.NS', sharePrice: 3282, sharesOutstanding: 361.81, equityValue: 1187460.42, netDebt: -4531, enterpriseValue: 1182929.42, revenue: 257688, ebitda: 74729.52, netIncome: 49687, evRevenue: 4.59, evEbitda: 15.83, pe: 23.90 },
  { company: 'HCL Technologies', ticker: 'HCLTECH.NS', sharePrice: 1642.4, sharesOutstanding: 271.37, equityValue: 445698.09, netDebt: -14509, enterpriseValue: 431189.09, revenue: 122427, ebitda: 28158.21, netIncome: 16983, evRevenue: 3.52, evEbitda: 15.31, pe: 26.24 },
  { company: 'Wipro', ticker: 'WIT', sharePrice: 264.45, sharesOutstanding: 1048.67, equityValue: 277320.78, netDebt: 3966.30, enterpriseValue: 281287.08, revenue: 89654.90, ebitda: 22413.73, netIncome: 13553.70, evRevenue: 3.14, evEbitda: 12.55, pe: 20.46 },
  { company: 'LTIMindtree', ticker: 'LTIM.NS', sharePrice: 6197.5, sharesOutstanding: 29.65, equityValue: 183755.88, netDebt: -1205.60, enterpriseValue: 182550.28, revenue: 39667.50, ebitda: 7933.50, netIncome: 4851.10, evRevenue: 4.60, evEbitda: 23.01, pe: 37.88 },
  { company: 'Tech Mahindra', ticker: 'TECHM.BO', sharePrice: 1612.5, sharesOutstanding: 97.97, equityValue: 157976.63, netDebt: -2587.80, enterpriseValue: 155388.83, revenue: 54015.70, ebitda: 8102.36, netIncome: 4461.20, evRevenue: 2.88, evEbitda: 19.18, pe: 35.41 },
  { company: 'Persistent Systems', ticker: 'PERSISTENT.NS', sharePrice: 6358, sharesOutstanding: 15.78, equityValue: 100329.24, netDebt: -621.53, enterpriseValue: 99707.71, revenue: 13218.70, ebitda: 2643.74, netIncome: 1665.16, evRevenue: 7.54, evEbitda: 37.71, pe: 60.25 },
  { company: 'Oracle Fin.Serv.', ticker: 'OFSS.BO', sharePrice: 7823.5, sharesOutstanding: 8.7, equityValue: 68064.45, netDebt: -5917.40, enterpriseValue: 62147.05, revenue: 7072.50, ebitda: 3394.80, netIncome: 2373.20, evRevenue: 8.79, evEbitda: 18.31, pe: 28.68 },
  { company: 'Coforge', ticker: 'COFORGE.NS', sharePrice: 1845.4, sharesOutstanding: 33.5, equityValue: 61820.90, netDebt: 88.30, enterpriseValue: 61909.20, revenue: 14342.30, ebitda: 2438.19, netIncome: 1345.00, evRevenue: 4.32, evEbitda: 25.39, pe: 45.96 },
  { company: 'Mphasis', ticker: 'MPHASIS.NS', sharePrice: 2890.2, sharesOutstanding: 19.06, equityValue: 55087.21, netDebt: 366.45, enterpriseValue: 55453.66, revenue: 14905.78, ebitda: 3130.21, netIncome: 1785.07, evRevenue: 3.72, evEbitda: 17.72, pe: 30.86 },
];

export const compsStats = {
  high: { evRevenue: 8.79, evEbitda: 37.71, pe: 60.25 },
  '75th': { evRevenue: 4.60, evEbitda: 22.05, pe: 37.26 },
  average: { evRevenue: 4.69, evEbitda: 19.97, pe: 33.32 },
  median: { evRevenue: 4.07, evEbitda: 18.01, pe: 29.77 },
  '25th': { evRevenue: 3.57, evEbitda: 15.44, pe: 24.49 },
  low: { evRevenue: 2.88, evEbitda: 12.55, pe: 20.46 },
};

export const compsImpliedValuation = {
  evRevenue: { impliedEV: 690108.48, netDebt: -15700, impliedMV: 705808.48, shares: 405.47, impliedPerShare: 1740.72, status: 'Undervalued' },
  evEbitda: { impliedEV: 793551.55, netDebt: -15700, impliedMV: 809251.55, shares: 405.47, impliedPerShare: 1995.84, status: 'Undervalued' },
  pe: { impliedEV: 822599.42, netDebt: -15700, impliedMV: 838299.42, shares: 405.47, impliedPerShare: 2067.48, status: 'Undervalued' },
};

// ============================================================
// FOOTBALL FIELD (from Infosys.xlsx → "Football Field" sheet)
// ============================================================

export const footballFieldData = [
  { method: 'Comps', low: 1740.72, high: 2067.48 },
  { method: 'DCF Bear', low: 975.10, high: 3935.72 },
  { method: 'DCF Base', low: 1171.85, high: -73780.80 },
  { method: 'DCF Bull', low: -3465.85, high: -505.22 },
  { method: '52w H/L', low: 1307.00, high: 1982.80 },
];

// ============================================================
// HISTORICAL FS (from Infosys.xlsx → "Historical FS" sheet)
// ============================================================

export const historicalFSYears = ['FY16', 'FY17', 'FY18', 'FY19', 'FY20', 'FY21', 'FY22', 'FY23', 'FY24', 'FY25', 'LTM'];

export const historicalIncomeStatement = {
  sales: [62441, 68484, 70522, 82675, 90791, 100472, 121641, 146767, 153670, 162990, 169458],
  salesGrowth: [0, 0.0968, 0.0298, 0.1723, 0.0982, 0.1066, 0.2107, 0.2066, 0.0470, 0.0606, 0.0397],
  cogs: [40492, 44609, 46395, 55446, 62210, 68490, 84819, 104880, 110030, 116585, 128991],
  grossProfit: [21949, 23875, 24127, 27229, 28581, 31982, 36822, 41887, 43640, 46405, 40467],
  ebitda: [17079, 18604, 18822, 20170, 22267, 27889, 31491, 35130, 36425, 39236, 0],
  interest: [0, 0, 0, 0, 170, 195, 200, 284, 470, 416, 414],
  depreciation: [1459, 1703, 1863, 2011, 2893, 3267, 3476, 4225, 4678, 4812, 4824],
  earningBeforeTax: [15620, 16901, 16959, 18159, 19204, 24427, 27815, 30621, 31277, 34008, -5238],
  tax: [5251, 5598, 4241, 5631, 5368, 7205, 7964, 9214, 9740, 10858, 11143],
  netProfit: [10369, 11303, 12718, 12528, 13836, 17222, 19851, 21407, 21537, 23150, 28124],
  eps: [0.0443, 0.0406, 0.0343, 0.0349, 0.0308, 0.0247, 0.0212, 0.0194, 0.0193, 0.0179],
};

export const historicalBalanceSheet = {
  equityShareCapital: [1144, 1144, 1088, 2170, 2122, 2124, 2098, 2069, 2071, 2073],
  reserves: [60600, 67838, 63835, 62778, 63328, 74227, 73252, 73338, 86045, 93745],
  borrowings: [0, 0, 0, 0, 4633, 5325, 5474, 8299, 8359, 8227],
  otherLiabilities: [13354, 14166, 14426, 19118, 21717, 25835, 35905, 40890, 40885, 43750],
  totalLiabilities: [75098, 83148, 79349, 84066, 91800, 107511, 116729, 124596, 137360, 147795],
  fixedAssetsNetBlock: [13386, 14179, 12574, 15710, 23789, 25505, 25800, 29225, 27622, 30961],
  investments: [1892, 16423, 12163, 11261, 8792, 14205, 20324, 19478, 24623, 23541],
  receivables: [11330, 12322, 13142, 14827, 18487, 19294, 22698, 25424, 30193, 31158],
  cashAndBank: [32697, 22625, 19818, 19568, 18649, 24714, 17472, 12173, 14786, 24455],
  totalAssets: [75098, 83148, 79349, 84066, 91800, 107511, 116729, 124596, 137360, 147795],
};

export const historicalCashFlow = {
  operatingActivity: [8082, 9375, 13302, 14388, 14636, 23992, 22461, 16123, 20128, 35399],
  investingActivity: [-885, -14664, 4533, -632, -331, -7373, -6485, -1071, -5093, -1864],
  financingActivity: [-6813, -6939, -20505, -14512, -17591, -9786, -24642, -26695, -17504, -24161],
  netCashFlow: [384, -12228, -2670, -756, -3286, 6833, -8666, -11643, -2469, 9374],
};

// ============================================================
// ALTMAN Z-SCORE (from Infosys.xlsx → "Altman Z Score" sheet)
// ============================================================

export const altmanZScoreYears = ['FY19', 'FY20', 'FY21', 'FY22', 'FY23', 'FY24', 'FY25'];

export const altmanZScoreData = {
  workingCapital: [36589, 36548, 41044, 34284, 34715, 43937, 48729],
  totalAssets: [84066, 91800, 107511, 116729, 124596, 137360, 147795],
  workingCapitalTA: [0.4352, 0.3981, 0.3818, 0.2937, 0.2786, 0.3199, 0.3297],
  retainedEarnings: [0, 0, 0, 0, 0, 0, 0],
  retainedEarningsTA: [0, 0, 0, 0, 0, 0, 0],
  ebit: [18159, 19374, 24622, 28015, 30905, 31747, 34424],
  ebitTA: [0.2160, 0.2110, 0.2290, 0.2400, 0.2480, 0.2311, 0.2329],
  marketCap: [322529.97, 272044.32, 580757.21, 799544.67, 590655.51, 620185.30, 650815.72],
  longTermLiabilities: [0, 4633, 5325, 5474, 8299, 8359, 8227],
  marketCapLTL: [null, 58.72, 109.06, 146.06, 71.17, 74.19, 79.11],
  sales: [82675, 90791, 100472, 121641, 146767, 153670, 162990],
  salesTA: [0.9835, 0.9890, 0.9345, 1.0421, 1.1779, 1.1187, 1.1028],
  finalScore: [2.2186, 37.3945, 67.5858, 89.8239, 45.0340, 46.7815, 49.7315],
  financialStability: ['Grey Zone', 'Strong', 'Strong', 'Strong', 'Strong', 'Strong', 'Strong'],
};
