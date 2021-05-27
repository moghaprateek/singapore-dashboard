const expenditureData = `"financial_year","actual_revised_estimated","sector","ministry","type","amount","percent_of_gdp"
1997,"Actual","Social Development","Education","Operating",3348,0.022
1998,"Actual","Social Development","Education","Operating",3167,0.022
1999,"Actual","Social Development","Education","Operating",3257,0.022
2000,"Actual","Social Development","Education","Operating",4277,0.025
2001,"Actual","Social Development","Education","Operating",4767,0.03
2002,"Actual","Social Development","Education","Operating",4824,0.029
2003,"Actual","Social Development","Education","Operating",4997,0.029
2004,"Actual","Social Development","Education","Operating",4975,0.025
2005,"Actual","Social Development","Education","Operating",5215,0.024
2006,"Actual","Social Development","Education","Operating",6352,0.026
2007,"Actual","Social Development","Education","Operating",6786,0.024
2008,"Actual","Social Development","Education","Operating",7477,0.028
2009,"Actual","Social Development","Education","Operating",7838,0.027
2010,"Actual","Social Development","Education","Operating",8999,0.027
2011,"Actual","Social Development","Education","Operating",9698,0.027
2012,"Actual","Social Development","Education","Operating",9637,0.026
2013,"Actual","Social Development","Education","Operating",10665,0.027
2014,"Actual","Social Development","Education","Operating",10712,0.026
2015,"Actual","Social Development","Education","Operating",11236,0.026
2016,"Actual","Social Development","Education","Operating",11812,0.026
2017,"Actual","Social Development","Education","Operating",12080,0.025
2018,"Actual","Social Development","Education","Operating",12429,0.024
2019,"Actual","Social Development","Education","Operating",11932,0.023
2020,"Revised","Social Development","Education","Operating",12048,0.026
2021,"Estimated","Social Development","Education","Operating",13090,0.026
1997,"Actual","Social Development","Education","Development",1102,0.007
1998,"Actual","Social Development","Education","Development",1686,0.012
1999,"Actual","Social Development","Education","Development",1601,0.011
2000,"Actual","Social Development","Education","Development",1591,0.009
2001,"Actual","Social Development","Education","Development",1473,0.009
2002,"Actual","Social Development","Education","Development",1774,0.011
2003,"Actual","Social Development","Education","Development",1218,0.007
2004,"Actual","Social Development","Education","Development",1239,0.006
2005,"Actual","Social Development","Education","Development",867,0.004
2006,"Actual","Social Development","Education","Development",608,0.002
2007,"Actual","Social Development","Education","Development",742,0.003
2008,"Actual","Social Development","Education","Development",753,0.003
2009,"Actual","Social Development","Education","Development",847,0.003
2010,"Actual","Social Development","Education","Development",877,0.003
2011,"Actual","Social Development","Education","Development",1042,0.003
2012,"Actual","Social Development","Education","Development",860,0.002
2013,"Actual","Social Development","Education","Development",973,0.003
2014,"Actual","Social Development","Education","Development",886,0.002
2015,"Actual","Social Development","Education","Development",699,0.002
2016,"Actual","Social Development","Education","Development",657,0.001
2017,"Actual","Social Development","Education","Development",611,0.001
2018,"Actual","Social Development","Education","Development",447,0.001
2019,"Actual","Social Development","Education","Development",791,0.002
2020,"Revised","Social Development","Education","Development",582,0.001
2021,"Estimated","Social Development","Education","Development",530,0.001
1997,"Actual","Social Development","National Development","Operating",441,0.003
1998,"Actual","Social Development","National Development","Operating",402,0.003
1999,"Actual","Social Development","National Development","Operating",358,0.002
2000,"Actual","Social Development","National Development","Operating",325,0.002
2001,"Actual","Social Development","National Development","Operating",398,0.002
2002,"Actual","Social Development","National Development","Operating",409,0.002
2003,"Actual","Social Development","National Development","Operating",414,0.002
2004,"Actual","Social Development","National Development","Operating",377,0.002
2005,"Actual","Social Development","National Development","Operating",336,0.002
2006,"Actual","Social Development","National Development","Operating",671,0.003
2007,"Actual","Social Development","National Development","Operating",900,0.003
2008,"Actual","Social Development","National Development","Operating",805,0.003
2009,"Actual","Social Development","National Development","Operating",959,0.003
2010,"Actual","Social Development","National Development","Operating",790,0.002
2011,"Actual","Social Development","National Development","Operating",1428,0.004
2012,"Actual","Social Development","National Development","Operating",949,0.003
2013,"Actual","Social Development","National Development","Operating",673,0.002
2014,"Actual","Social Development","National Development","Operating",858,0.002
2015,"Actual","Social Development","National Development","Operating",1332,0.003
2016,"Actual","Social Development","National Development","Operating",2284,0.005
2017,"Actual","Social Development","National Development","Operating",3218,0.007
2018,"Actual","Social Development","National Development","Operating",2941,0.006
2019,"Actual","Social Development","National Development","Operating",2606,0.005
2020,"Revised","Social Development","National Development","Operating",4780,0.01
2021,"Estimated","Social Development","National Development","Operating",4149,0.008
1997,"Actual","Social Development","National Development","Development",972,0.006
1998,"Actual","Social Development","National Development","Development",2003,0.014
1999,"Actual","Social Development","National Development","Development",2172,0.014
2000,"Actual","Social Development","National Development","Development",2069,0.012
2001,"Actual","Social Development","National Development","Development",1770,0.011
2002,"Actual","Social Development","National Development","Development",1089,0.007
2003,"Actual","Social Development","National Development","Development",1865,0.011
2004,"Actual","Social Development","National Development","Development",1153,0.006
2005,"Actual","Social Development","National Development","Development",1010,0.005
2006,"Actual","Social Development","National Development","Development",675,0.003
2007,"Actual","Social Development","National Development","Development",1187,0.004
2008,"Actual","Social Development","National Development","Development",1095,0.004
2009,"Actual","Social Development","National Development","Development",1307,0.004
2010,"Actual","Social Development","National Development","Development",1646,0.005
2011,"Actual","Social Development","National Development","Development",1572,0.004
2012,"Actual","Social Development","National Development","Development",1354,0.004
2013,"Actual","Social Development","National Development","Development",901,0.002
2014,"Actual","Social Development","National Development","Development",1308,0.003
2015,"Actual","Social Development","National Development","Development",1321,0.003
2016,"Actual","Social Development","National Development","Development",1248,0.003
2017,"Actual","Social Development","National Development","Development",1257,0.003
2018,"Actual","Social Development","National Development","Development",1191,0.002
2019,"Actual","Social Development","National Development","Development",926,0.002
2020,"Revised","Social Development","National Development","Development",1155,0.002
2021,"Estimated","Social Development","National Development","Development",1380,0.003
1997,"Actual","Social Development","Health","Operating",896,0.006
1998,"Actual","Social Development","Health","Operating",992,0.007
1999,"Actual","Social Development","Health","Operating",936,0.006
2000,"Actual","Social Development","Health","Operating",1072,0.006
2001,"Actual","Social Development","Health","Operating",1445,0.009
2002,"Actual","Social Development","Health","Operating",1451,0.009
2003,"Actual","Social Development","Health","Operating",1904,0.011
2004,"Actual","Social Development","Health","Operating",1604,0.008
2005,"Actual","Social Development","Health","Operating",1680,0.008
2006,"Actual","Social Development","Health","Operating",1840,0.008
2007,"Actual","Social Development","Health","Operating",2019,0.007
2008,"Actual","Social Development","Health","Operating",2379,0.009
2009,"Actual","Social Development","Health","Operating",2920,0.01
2010,"Actual","Social Development","Health","Operating",3258,0.01
2011,"Actual","Social Development","Health","Operating",3489,0.01
2012,"Actual","Social Development","Health","Operating",4066,0.011
2013,"Actual","Social Development","Health","Operating",5044,0.013
2014,"Actual","Social Development","Health","Operating",5872,0.014
2015,"Actual","Social Development","Health","Operating",7520,0.018
2016,"Actual","Social Development","Health","Operating",8199,0.018
2017,"Actual","Social Development","Health","Operating",8734,0.018
2018,"Actual","Social Development","Health","Operating",8937,0.017
2019,"Actual","Social Development","Health","Operating",9915,0.019
2020,"Revised","Social Development","Health","Operating",15767,0.034
2021,"Estimated","Social Development","Health","Operating",17355,0.034
1997,"Actual","Social Development","Health","Development",274,0.002
1998,"Actual","Social Development","Health","Development",251,0.002
1999,"Actual","Social Development","Health","Development",153,0.001
2000,"Actual","Social Development","Health","Development",140,0.001
2001,"Actual","Social Development","Health","Development",145,0.001
2002,"Actual","Social Development","Health","Development",82,0
2003,"Actual","Social Development","Health","Development",103,0.001
2004,"Actual","Social Development","Health","Development",114,0.001
2005,"Actual","Social Development","Health","Development",85,0
2006,"Actual","Social Development","Health","Development",96,0
2007,"Actual","Social Development","Health","Development",185,0.001
2008,"Actual","Social Development","Health","Development",336,0.001
2009,"Actual","Social Development","Health","Development",711,0.002
2010,"Actual","Social Development","Health","Development",485,0.001
2011,"Actual","Social Development","Health","Development",453,0.001
2012,"Actual","Social Development","Health","Development",605,0.002
2013,"Actual","Social Development","Health","Development",723,0.002
2014,"Actual","Social Development","Health","Development",1147,0.003
2015,"Actual","Social Development","Health","Development",1413,0.003
2016,"Actual","Social Development","Health","Development",1619,0.004
2017,"Actual","Social Development","Health","Development",1465,0.003
2018,"Actual","Social Development","Health","Development",1490,0.003
2019,"Actual","Social Development","Health","Development",1404,0.003
2020,"Revised","Social Development","Health","Development",885,0.002
2021,"Estimated","Social Development","Health","Development",1490,0.003
1997,"Actual","Social Development","Sustainability and the Environment","Operating",318,0.002
1998,"Actual","Social Development","Sustainability and the Environment","Operating",314,0.002
1999,"Actual","Social Development","Sustainability and the Environment","Operating",329,0.002
2000,"Actual","Social Development","Sustainability and the Environment","Operating",390,0.002
2001,"Actual","Social Development","Sustainability and the Environment","Operating",414,0.003
2002,"Actual","Social Development","Sustainability and the Environment","Operating",448,0.003
2003,"Actual","Social Development","Sustainability and the Environment","Operating",453,0.003
2004,"Actual","Social Development","Sustainability and the Environment","Operating",479,0.002
2005,"Actual","Social Development","Sustainability and the Environment","Operating",408,0.002
2006,"Actual","Social Development","Sustainability and the Environment","Operating",414,0.002
2007,"Actual","Social Development","Sustainability and the Environment","Operating",453,0.002
2008,"Actual","Social Development","Sustainability and the Environment","Operating",606,0.002
2009,"Actual","Social Development","Sustainability and the Environment","Operating",656,0.002
2010,"Actual","Social Development","Sustainability and the Environment","Operating",720,0.002
2011,"Actual","Social Development","Sustainability and the Environment","Operating",726,0.002
2012,"Actual","Social Development","Sustainability and the Environment","Operating",813,0.002
2013,"Actual","Social Development","Sustainability and the Environment","Operating",958,0.002
2014,"Actual","Social Development","Sustainability and the Environment","Operating",1049,0.003
2015,"Actual","Social Development","Sustainability and the Environment","Operating",1125,0.003
2016,"Actual","Social Development","Sustainability and the Environment","Operating",1201,0.003
2017,"Actual","Social Development","Sustainability and the Environment","Operating",1248,0.003
2018,"Actual","Social Development","Sustainability and the Environment","Operating",1295,0.003
2019,"Actual","Social Development","Sustainability and the Environment","Operating",1540,0.003
2020,"Revised","Social Development","Sustainability and the Environment","Operating",1699,0.004
2021,"Estimated","Social Development","Sustainability and the Environment","Operating",1849,0.004
1997,"Actual","Social Development","Sustainability and the Environment","Development",652,0.004
1998,"Actual","Social Development","Sustainability and the Environment","Development",1042,0.007
1999,"Actual","Social Development","Sustainability and the Environment","Development",945,0.006
2000,"Actual","Social Development","Sustainability and the Environment","Development",528,0.003
2001,"Actual","Social Development","Sustainability and the Environment","Development",502,0.003
2002,"Actual","Social Development","Sustainability and the Environment","Development",771,0.005
2003,"Actual","Social Development","Sustainability and the Environment","Development",952,0.005
2004,"Actual","Social Development","Sustainability and the Environment","Development",1101,0.006
2005,"Actual","Social Development","Sustainability and the Environment","Development",775,0.004
2006,"Actual","Social Development","Sustainability and the Environment","Development",570,0.002
2007,"Actual","Social Development","Sustainability and the Environment","Development",381,0.001
2008,"Actual","Social Development","Sustainability and the Environment","Development",325,0.001
2009,"Actual","Social Development","Sustainability and the Environment","Development",323,0.001
2010,"Actual","Social Development","Sustainability and the Environment","Development",406,0.001
2011,"Actual","Social Development","Sustainability and the Environment","Development",349,0.001
2012,"Actual","Social Development","Sustainability and the Environment","Development",352,0.001
2013,"Actual","Social Development","Sustainability and the Environment","Development",325,0.001
2014,"Actual","Social Development","Sustainability and the Environment","Development",427,0.001
2015,"Actual","Social Development","Sustainability and the Environment","Development",567,0.001
2016,"Actual","Social Development","Sustainability and the Environment","Development",684,0.002
2017,"Actual","Social Development","Sustainability and the Environment","Development",1549,0.003
2018,"Actual","Social Development","Sustainability and the Environment","Development",839,0.002
2019,"Actual","Social Development","Sustainability and the Environment","Development",1076,0.002
2020,"Revised","Social Development","Sustainability and the Environment","Development",738,0.002
2021,"Estimated","Social Development","Sustainability and the Environment","Development",1055,0.002
1997,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
1998,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
1999,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2000,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2001,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2002,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2003,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2004,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2005,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2006,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2007,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2008,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2009,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2010,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2011,"Actual","Social Development","Culture, Community and Youth","Operating",0,0
2012,"Actual","Social Development","Culture, Community and Youth","Operating",364,0.001
2013,"Actual","Social Development","Culture, Community and Youth","Operating",1003,0.003
2014,"Actual","Social Development","Culture, Community and Youth","Operating",1335,0.003
2015,"Actual","Social Development","Culture, Community and Youth","Operating",1795,0.004
2016,"Actual","Social Development","Culture, Community and Youth","Operating",1444,0.003
2017,"Actual","Social Development","Culture, Community and Youth","Operating",1586,0.003
2018,"Actual","Social Development","Culture, Community and Youth","Operating",1668,0.003
2019,"Actual","Social Development","Culture, Community and Youth","Operating",1674,0.003
2020,"Revised","Social Development","Culture, Community and Youth","Operating",1988,0.004
2021,"Estimated","Social Development","Culture, Community and Youth","Operating",1914,0.004
1997,"Actual","Social Development","Culture, Community and Youth","Development",0,0
1998,"Actual","Social Development","Culture, Community and Youth","Development",0,0
1999,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2000,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2001,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2002,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2003,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2004,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2005,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2006,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2007,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2008,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2009,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2010,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2011,"Actual","Social Development","Culture, Community and Youth","Development",0,0
2012,"Actual","Social Development","Culture, Community and Youth","Development",95,0
2013,"Actual","Social Development","Culture, Community and Youth","Development",212,0.001
2014,"Actual","Social Development","Culture, Community and Youth","Development",617,0.002
2015,"Actual","Social Development","Culture, Community and Youth","Development",779,0.002
2016,"Actual","Social Development","Culture, Community and Youth","Development",507,0.001
2017,"Actual","Social Development","Culture, Community and Youth","Development",489,0.001
2018,"Actual","Social Development","Culture, Community and Youth","Development",300,0.001
2019,"Actual","Social Development","Culture, Community and Youth","Development",210,0
2020,"Revised","Social Development","Culture, Community and Youth","Development",212,0
2021,"Estimated","Social Development","Culture, Community and Youth","Development",358,0.001
1997,"Actual","Social Development","Social and Family Development","Operating",290,0.002
1998,"Actual","Social Development","Social and Family Development","Operating",363,0.003
1999,"Actual","Social Development","Social and Family Development","Operating",310,0.002
2000,"Actual","Social Development","Social and Family Development","Operating",377,0.002
2001,"Actual","Social Development","Social and Family Development","Operating",513,0.003
2002,"Actual","Social Development","Social and Family Development","Operating",572,0.003
2003,"Actual","Social Development","Social and Family Development","Operating",619,0.004
2004,"Actual","Social Development","Social and Family Development","Operating",814,0.004
2005,"Actual","Social Development","Social and Family Development","Operating",844,0.004
2006,"Actual","Social Development","Social and Family Development","Operating",903,0.004
2007,"Actual","Social Development","Social and Family Development","Operating",962,0.003
2008,"Actual","Social Development","Social and Family Development","Operating",1182,0.004
2009,"Actual","Social Development","Social and Family Development","Operating",1565,0.005
2010,"Actual","Social Development","Social and Family Development","Operating",1829,0.005
2011,"Actual","Social Development","Social and Family Development","Operating",1721,0.005
2012,"Actual","Social Development","Social and Family Development","Operating",1739,0.005
2013,"Actual","Social Development","Social and Family Development","Operating",1598,0.004
2014,"Actual","Social Development","Social and Family Development","Operating",1722,0.004
2015,"Actual","Social Development","Social and Family Development","Operating",2121,0.005
2016,"Actual","Social Development","Social and Family Development","Operating",2389,0.005
2017,"Actual","Social Development","Social and Family Development","Operating",2459,0.005
2018,"Actual","Social Development","Social and Family Development","Operating",2608,0.005
2019,"Actual","Social Development","Social and Family Development","Operating",2835,0.006
2020,"Revised","Social Development","Social and Family Development","Operating",3830,0.008
2021,"Estimated","Social Development","Social and Family Development","Operating",4014,0.008
1997,"Actual","Social Development","Social and Family Development","Development",169,0.001
1998,"Actual","Social Development","Social and Family Development","Development",138,0.001
1999,"Actual","Social Development","Social and Family Development","Development",132,0.001
2000,"Actual","Social Development","Social and Family Development","Development",92,0.001
2001,"Actual","Social Development","Social and Family Development","Development",118,0.001
2002,"Actual","Social Development","Social and Family Development","Development",112,0.001
2003,"Actual","Social Development","Social and Family Development","Development",90,0.001
2004,"Actual","Social Development","Social and Family Development","Development",97,0
2005,"Actual","Social Development","Social and Family Development","Development",97,0
2006,"Actual","Social Development","Social and Family Development","Development",103,0
2007,"Actual","Social Development","Social and Family Development","Development",234,0.001
2008,"Actual","Social Development","Social and Family Development","Development",96,0
2009,"Actual","Social Development","Social and Family Development","Development",115,0
2010,"Actual","Social Development","Social and Family Development","Development",120,0
2011,"Actual","Social Development","Social and Family Development","Development",64,0
2012,"Actual","Social Development","Social and Family Development","Development",37,0
2013,"Actual","Social Development","Social and Family Development","Development",41,0
2014,"Actual","Social Development","Social and Family Development","Development",62,0
2015,"Actual","Social Development","Social and Family Development","Development",111,0
2016,"Actual","Social Development","Social and Family Development","Development",98,0
2017,"Actual","Social Development","Social and Family Development","Development",87,0
2018,"Actual","Social Development","Social and Family Development","Development",115,0
2019,"Actual","Social Development","Social and Family Development","Development",111,0
2020,"Revised","Social Development","Social and Family Development","Development",95,0
2021,"Estimated","Social Development","Social and Family Development","Development",99,0
1997,"Actual","Social Development","Communications and Information","Operating",186,0.001
1998,"Actual","Social Development","Communications and Information","Operating",194,0.001
1999,"Actual","Social Development","Communications and Information","Operating",220,0.001
2000,"Actual","Social Development","Communications and Information","Operating",213,0.001
2001,"Actual","Social Development","Communications and Information","Operating",234,0.001
2002,"Actual","Social Development","Communications and Information","Operating",241,0.001
2003,"Actual","Social Development","Communications and Information","Operating",228,0.001
2004,"Actual","Social Development","Communications and Information","Operating",251,0.001
2005,"Actual","Social Development","Communications and Information","Operating",294,0.001
2006,"Actual","Social Development","Communications and Information","Operating",341,0.001
2007,"Actual","Social Development","Communications and Information","Operating",352,0.001
2008,"Actual","Social Development","Communications and Information","Operating",412,0.002
2009,"Actual","Social Development","Communications and Information","Operating",422,0.001
2010,"Actual","Social Development","Communications and Information","Operating",500,0.001
2011,"Actual","Social Development","Communications and Information","Operating",525,0.001
2012,"Actual","Social Development","Communications and Information","Operating",430,0.001
2013,"Actual","Social Development","Communications and Information","Operating",336,0.001
2014,"Actual","Social Development","Communications and Information","Operating",354,0.001
2015,"Actual","Social Development","Communications and Information","Operating",424,0.001
2016,"Actual","Social Development","Communications and Information","Operating",456,0.001
2017,"Actual","Social Development","Communications and Information","Operating",496,0.001
2018,"Actual","Social Development","Communications and Information","Operating",494,0.001
2019,"Actual","Social Development","Communications and Information","Operating",517,0.001
2020,"Revised","Social Development","Communications and Information","Operating",628,0.001
2021,"Estimated","Social Development","Communications and Information","Operating",590,0.001
1997,"Actual","Social Development","Communications and Information","Development",137,0.001
1998,"Actual","Social Development","Communications and Information","Development",158,0.001
1999,"Actual","Social Development","Communications and Information","Development",139,0.001
2000,"Actual","Social Development","Communications and Information","Development",97,0.001
2001,"Actual","Social Development","Communications and Information","Development",162,0.001
2002,"Actual","Social Development","Communications and Information","Development",143,0.001
2003,"Actual","Social Development","Communications and Information","Development",160,0.001
2004,"Actual","Social Development","Communications and Information","Development",155,0.001
2005,"Actual","Social Development","Communications and Information","Development",110,0.001
2006,"Actual","Social Development","Communications and Information","Development",89,0
2007,"Actual","Social Development","Communications and Information","Development",95,0
2008,"Actual","Social Development","Communications and Information","Development",132,0
2009,"Actual","Social Development","Communications and Information","Development",128,0
2010,"Actual","Social Development","Communications and Information","Development",109,0
2011,"Actual","Social Development","Communications and Information","Development",123,0
2012,"Actual","Social Development","Communications and Information","Development",79,0
2013,"Actual","Social Development","Communications and Information","Development",61,0
2014,"Actual","Social Development","Communications and Information","Development",148,0
2015,"Actual","Social Development","Communications and Information","Development",144,0
2016,"Actual","Social Development","Communications and Information","Development",88,0
2017,"Actual","Social Development","Communications and Information","Development",160,0
2018,"Actual","Social Development","Communications and Information","Development",36,0
2019,"Actual","Social Development","Communications and Information","Development",41,0
2020,"Revised","Social Development","Communications and Information","Development",20,0
2021,"Estimated","Social Development","Communications and Information","Development",39,0
1997,"Actual","Social Development","Manpower","Operating",0,0
1998,"Actual","Social Development","Manpower","Operating",0,0
1999,"Actual","Social Development","Manpower","Operating",0,0
2000,"Actual","Social Development","Manpower","Operating",0,0
2001,"Actual","Social Development","Manpower","Operating",0,0
2002,"Actual","Social Development","Manpower","Operating",0,0
2003,"Actual","Social Development","Manpower","Operating",0,0
2004,"Actual","Social Development","Manpower","Operating",0,0
2005,"Actual","Social Development","Manpower","Operating",0,0
2006,"Actual","Social Development","Manpower","Operating",0,0
2007,"Actual","Social Development","Manpower","Operating",2,0
2008,"Actual","Social Development","Manpower","Operating",340,0.001
2009,"Actual","Social Development","Manpower","Operating",354,0.001
2010,"Actual","Social Development","Manpower","Operating",364,0.001
2011,"Actual","Social Development","Manpower","Operating",469,0.001
2012,"Actual","Social Development","Manpower","Operating",497,0.001
2013,"Actual","Social Development","Manpower","Operating",666,0.002
2014,"Actual","Social Development","Manpower","Operating",709,0.002
2015,"Actual","Social Development","Manpower","Operating",706,0.002
2016,"Actual","Social Development","Manpower","Operating",1154,0.003
2017,"Actual","Social Development","Manpower","Operating",1028,0.002
2018,"Actual","Social Development","Manpower","Operating",1027,0.002
2019,"Actual","Social Development","Manpower","Operating",1029,0.002
2020,"Revised","Social Development","Manpower","Operating",2400,0.005
2021,"Estimated","Social Development","Manpower","Operating",1556,0.003
1997,"Actual","Social Development","Manpower","Development",0,0
1998,"Actual","Social Development","Manpower","Development",0,0
1999,"Actual","Social Development","Manpower","Development",0,0
2000,"Actual","Social Development","Manpower","Development",0,0
2001,"Actual","Social Development","Manpower","Development",0,0
2002,"Actual","Social Development","Manpower","Development",0,0
2003,"Actual","Social Development","Manpower","Development",0,0
2004,"Actual","Social Development","Manpower","Development",0,0
2005,"Actual","Social Development","Manpower","Development",0,0
2006,"Actual","Social Development","Manpower","Development",0,0
2007,"Actual","Social Development","Manpower","Development",0,0
2008,"Actual","Social Development","Manpower","Development",1,0
2009,"Actual","Social Development","Manpower","Development",0,0
2010,"Actual","Social Development","Manpower","Development",0,0
2011,"Actual","Social Development","Manpower","Development",0,0
2012,"Actual","Social Development","Manpower","Development",0,0
2013,"Actual","Social Development","Manpower","Development",0,0
2014,"Actual","Social Development","Manpower","Development",0,0
2015,"Actual","Social Development","Manpower","Development",0,0
2016,"Actual","Social Development","Manpower","Development",0,0
2017,"Actual","Social Development","Manpower","Development",0,0
2018,"Actual","Social Development","Manpower","Development",2,0
2019,"Actual","Social Development","Manpower","Development",2,0
2020,"Revised","Social Development","Manpower","Development",3,0
2021,"Estimated","Social Development","Manpower","Development",4,0
1997,"Actual","Security and External Relations","Defence","Operating",6097,0.041
1998,"Actual","Security and External Relations","Defence","Operating",6481,0.046
1999,"Actual","Security and External Relations","Defence","Operating",6647,0.044
2000,"Actual","Security and External Relations","Defence","Operating",6561,0.039
2001,"Actual","Security and External Relations","Defence","Operating",7089,0.044
2002,"Actual","Security and External Relations","Defence","Operating",7694,0.046
2003,"Actual","Security and External Relations","Defence","Operating",7714,0.044
2004,"Actual","Security and External Relations","Defence","Operating",8243,0.042
2005,"Actual","Security and External Relations","Defence","Operating",8889,0.041
2006,"Actual","Security and External Relations","Defence","Operating",9273,0.038
2007,"Actual","Security and External Relations","Defence","Operating",9660,0.035
2008,"Actual","Security and External Relations","Defence","Operating",10397,0.039
2009,"Actual","Security and External Relations","Defence","Operating",10603,0.036
2010,"Actual","Security and External Relations","Defence","Operating",10623,0.032
2011,"Actual","Security and External Relations","Defence","Operating",10797,0.03
2012,"Actual","Security and External Relations","Defence","Operating",11056,0.03
2013,"Actual","Security and External Relations","Defence","Operating",11329,0.029
2014,"Actual","Security and External Relations","Defence","Operating",11867,0.029
2015,"Actual","Security and External Relations","Defence","Operating",12672,0.03
2016,"Actual","Security and External Relations","Defence","Operating",13281,0.03
2017,"Actual","Security and External Relations","Defence","Operating",13582,0.028
2018,"Actual","Security and External Relations","Defence","Operating",13825,0.027
2019,"Actual","Security and External Relations","Defence","Operating",13669,0.027
2020,"Revised","Security and External Relations","Defence","Operating",13352,0.029
2021,"Estimated","Security and External Relations","Defence","Operating",14803,0.029
1997,"Actual","Security and External Relations","Defence","Development",418,0.003
1998,"Actual","Security and External Relations","Defence","Development",775,0.005
1999,"Actual","Security and External Relations","Defence","Development",620,0.004
2000,"Actual","Security and External Relations","Defence","Development",861,0.005
2001,"Actual","Security and External Relations","Defence","Development",730,0.005
2002,"Actual","Security and External Relations","Defence","Development",509,0.003
2003,"Actual","Security and External Relations","Defence","Development",524,0.003
2004,"Actual","Security and External Relations","Defence","Development",377,0.002
2005,"Actual","Security and External Relations","Defence","Development",363,0.002
2006,"Actual","Security and External Relations","Defence","Development",355,0.001
2007,"Actual","Security and External Relations","Defence","Development",349,0.001
2008,"Actual","Security and External Relations","Defence","Development",328,0.001
2009,"Actual","Security and External Relations","Defence","Development",440,0.001
2010,"Actual","Security and External Relations","Defence","Development",438,0.001
2011,"Actual","Security and External Relations","Defence","Development",479,0.001
2012,"Actual","Security and External Relations","Defence","Development",468,0.001
2013,"Actual","Security and External Relations","Defence","Development",422,0.001
2014,"Actual","Security and External Relations","Defence","Development",429,0.001
2015,"Actual","Security and External Relations","Defence","Development",431,0.001
2016,"Actual","Security and External Relations","Defence","Development",543,0.001
2017,"Actual","Security and External Relations","Defence","Development",594,0.001
2018,"Actual","Security and External Relations","Defence","Development",482,0.001
2019,"Actual","Security and External Relations","Defence","Development",481,0.001
2020,"Revised","Security and External Relations","Defence","Development",278,0.001
2021,"Estimated","Security and External Relations","Defence","Development",558,0.001
1997,"Actual","Security and External Relations","Home Affairs","Operating",994,0.007
1998,"Actual","Security and External Relations","Home Affairs","Operating",1032,0.007
1999,"Actual","Security and External Relations","Home Affairs","Operating",1101,0.007
2000,"Actual","Security and External Relations","Home Affairs","Operating",1300,0.008
2001,"Actual","Security and External Relations","Home Affairs","Operating",1580,0.01
2002,"Actual","Security and External Relations","Home Affairs","Operating",1563,0.009
2003,"Actual","Security and External Relations","Home Affairs","Operating",1708,0.01
2004,"Actual","Security and External Relations","Home Affairs","Operating",1752,0.009
2005,"Actual","Security and External Relations","Home Affairs","Operating",1825,0.008
2006,"Actual","Security and External Relations","Home Affairs","Operating",2010,0.008
2007,"Actual","Security and External Relations","Home Affairs","Operating",2428,0.009
2008,"Actual","Security and External Relations","Home Affairs","Operating",2478,0.009
2009,"Actual","Security and External Relations","Home Affairs","Operating",2577,0.009
2010,"Actual","Security and External Relations","Home Affairs","Operating",2937,0.009
2011,"Actual","Security and External Relations","Home Affairs","Operating",2947,0.008
2012,"Actual","Security and External Relations","Home Affairs","Operating",3266,0.009
2013,"Actual","Security and External Relations","Home Affairs","Operating",3522,0.009
2014,"Actual","Security and External Relations","Home Affairs","Operating",4029,0.01
2015,"Actual","Security and External Relations","Home Affairs","Operating",4377,0.01
2016,"Actual","Security and External Relations","Home Affairs","Operating",4652,0.01
2017,"Actual","Security and External Relations","Home Affairs","Operating",4996,0.01
2018,"Actual","Security and External Relations","Home Affairs","Operating",5505,0.011
2019,"Actual","Security and External Relations","Home Affairs","Operating",5703,0.011
2020,"Revised","Security and External Relations","Home Affairs","Operating",6063,0.013
2021,"Estimated","Security and External Relations","Home Affairs","Operating",6544,0.013
1997,"Actual","Security and External Relations","Home Affairs","Development",900,0.006
1998,"Actual","Security and External Relations","Home Affairs","Development",847,0.006
1999,"Actual","Security and External Relations","Home Affairs","Development",729,0.005
2000,"Actual","Security and External Relations","Home Affairs","Development",654,0.004
2001,"Actual","Security and External Relations","Home Affairs","Development",570,0.004
2002,"Actual","Security and External Relations","Home Affairs","Development",478,0.003
2003,"Actual","Security and External Relations","Home Affairs","Development",439,0.003
2004,"Actual","Security and External Relations","Home Affairs","Development",473,0.002
2005,"Actual","Security and External Relations","Home Affairs","Development",460,0.002
2006,"Actual","Security and External Relations","Home Affairs","Development",399,0.002
2007,"Actual","Security and External Relations","Home Affairs","Development",396,0.001
2008,"Actual","Security and External Relations","Home Affairs","Development",387,0.001
2009,"Actual","Security and External Relations","Home Affairs","Development",350,0.001
2010,"Actual","Security and External Relations","Home Affairs","Development",240,0.001
2011,"Actual","Security and External Relations","Home Affairs","Development",194,0.001
2012,"Actual","Security and External Relations","Home Affairs","Development",207,0.001
2013,"Actual","Security and External Relations","Home Affairs","Development",379,0.001
2014,"Actual","Security and External Relations","Home Affairs","Development",438,0.001
2015,"Actual","Security and External Relations","Home Affairs","Development",506,0.001
2016,"Actual","Security and External Relations","Home Affairs","Development",573,0.001
2017,"Actual","Security and External Relations","Home Affairs","Development",831,0.002
2018,"Actual","Security and External Relations","Home Affairs","Development",1129,0.002
2019,"Actual","Security and External Relations","Home Affairs","Development",972,0.002
2020,"Revised","Security and External Relations","Home Affairs","Development",804,0.002
2021,"Estimated","Security and External Relations","Home Affairs","Development",1332,0.003
1997,"Actual","Security and External Relations","Foreign Affairs","Operating",143,0.001
1998,"Actual","Security and External Relations","Foreign Affairs","Operating",148,0.001
1999,"Actual","Security and External Relations","Foreign Affairs","Operating",153,0.001
2000,"Actual","Security and External Relations","Foreign Affairs","Operating",180,0.001
2001,"Actual","Security and External Relations","Foreign Affairs","Operating",196,0.001
2002,"Actual","Security and External Relations","Foreign Affairs","Operating",211,0.001
2003,"Actual","Security and External Relations","Foreign Affairs","Operating",212,0.001
2004,"Actual","Security and External Relations","Foreign Affairs","Operating",233,0.001
2005,"Actual","Security and External Relations","Foreign Affairs","Operating",267,0.001
2006,"Actual","Security and External Relations","Foreign Affairs","Operating",257,0.001
2007,"Actual","Security and External Relations","Foreign Affairs","Operating",311,0.001
2008,"Actual","Security and External Relations","Foreign Affairs","Operating",344,0.001
2009,"Actual","Security and External Relations","Foreign Affairs","Operating",343,0.001
2010,"Actual","Security and External Relations","Foreign Affairs","Operating",360,0.001
2011,"Actual","Security and External Relations","Foreign Affairs","Operating",344,0.001
2012,"Actual","Security and External Relations","Foreign Affairs","Operating",355,0.001
2013,"Actual","Security and External Relations","Foreign Affairs","Operating",382,0.001
2014,"Actual","Security and External Relations","Foreign Affairs","Operating",394,0.001
2015,"Actual","Security and External Relations","Foreign Affairs","Operating",447,0.001
2016,"Actual","Security and External Relations","Foreign Affairs","Operating",439,0.001
2017,"Actual","Security and External Relations","Foreign Affairs","Operating",435,0.001
2018,"Actual","Security and External Relations","Foreign Affairs","Operating",444,0.001
2019,"Actual","Security and External Relations","Foreign Affairs","Operating",436,0.001
2020,"Revised","Security and External Relations","Foreign Affairs","Operating",395,0.001
2021,"Estimated","Security and External Relations","Foreign Affairs","Operating",421,0.001
1997,"Actual","Security and External Relations","Foreign Affairs","Development",6,0
1998,"Actual","Security and External Relations","Foreign Affairs","Development",24,0
1999,"Actual","Security and External Relations","Foreign Affairs","Development",53,0
2000,"Actual","Security and External Relations","Foreign Affairs","Development",70,0
2001,"Actual","Security and External Relations","Foreign Affairs","Development",62,0
2002,"Actual","Security and External Relations","Foreign Affairs","Development",81,0
2003,"Actual","Security and External Relations","Foreign Affairs","Development",57,0
2004,"Actual","Security and External Relations","Foreign Affairs","Development",49,0
2005,"Actual","Security and External Relations","Foreign Affairs","Development",46,0
2006,"Actual","Security and External Relations","Foreign Affairs","Development",86,0
2007,"Actual","Security and External Relations","Foreign Affairs","Development",83,0
2008,"Actual","Security and External Relations","Foreign Affairs","Development",61,0
2009,"Actual","Security and External Relations","Foreign Affairs","Development",71,0
2010,"Actual","Security and External Relations","Foreign Affairs","Development",40,0
2011,"Actual","Security and External Relations","Foreign Affairs","Development",44,0
2012,"Actual","Security and External Relations","Foreign Affairs","Development",45,0
2013,"Actual","Security and External Relations","Foreign Affairs","Development",59,0
2014,"Actual","Security and External Relations","Foreign Affairs","Development",40,0
2015,"Actual","Security and External Relations","Foreign Affairs","Development",19,0
2016,"Actual","Security and External Relations","Foreign Affairs","Development",53,0
2017,"Actual","Security and External Relations","Foreign Affairs","Development",24,0
2018,"Actual","Security and External Relations","Foreign Affairs","Development",26,0
2019,"Actual","Security and External Relations","Foreign Affairs","Development",16,0
2020,"Revised","Security and External Relations","Foreign Affairs","Development",8,0
2021,"Estimated","Security and External Relations","Foreign Affairs","Development",13,0
1997,"Actual","Economic Development","Manpower","Operating",53,0
1998,"Actual","Economic Development","Manpower","Operating",136,0.001
1999,"Actual","Economic Development","Manpower","Operating",91,0.001
2000,"Actual","Economic Development","Manpower","Operating",107,0.001
2001,"Actual","Economic Development","Manpower","Operating",130,0.001
2002,"Actual","Economic Development","Manpower","Operating",156,0.001
2003,"Actual","Economic Development","Manpower","Operating",158,0.001
2004,"Actual","Economic Development","Manpower","Operating",161,0.001
2005,"Actual","Economic Development","Manpower","Operating",166,0.001
2006,"Actual","Economic Development","Manpower","Operating",188,0.001
2007,"Actual","Economic Development","Manpower","Operating",225,0.001
2008,"Actual","Economic Development","Manpower","Operating",224,0.001
2009,"Actual","Economic Development","Manpower","Operating",414,0.001
2010,"Actual","Economic Development","Manpower","Operating",439,0.001
2011,"Actual","Economic Development","Manpower","Operating",380,0.001
2012,"Actual","Economic Development","Manpower","Operating",456,0.001
2013,"Actual","Economic Development","Manpower","Operating",496,0.001
2014,"Actual","Economic Development","Manpower","Operating",520,0.001
2015,"Actual","Economic Development","Manpower","Operating",611,0.001
2016,"Actual","Economic Development","Manpower","Operating",634,0.001
2017,"Actual","Economic Development","Manpower","Operating",645,0.001
2018,"Actual","Economic Development","Manpower","Operating",697,0.001
2019,"Actual","Economic Development","Manpower","Operating",892,0.002
2020,"Revised","Economic Development","Manpower","Operating",4272,0.009
2021,"Estimated","Economic Development","Manpower","Operating",5519,0.011
1997,"Actual","Economic Development","Manpower","Development",5,0
1998,"Actual","Economic Development","Manpower","Development",12,0
1999,"Actual","Economic Development","Manpower","Development",6,0
2000,"Actual","Economic Development","Manpower","Development",18,0
2001,"Actual","Economic Development","Manpower","Development",82,0.001
2002,"Actual","Economic Development","Manpower","Development",38,0
2003,"Actual","Economic Development","Manpower","Development",54,0
2004,"Actual","Economic Development","Manpower","Development",52,0
2005,"Actual","Economic Development","Manpower","Development",36,0
2006,"Actual","Economic Development","Manpower","Development",15,0
2007,"Actual","Economic Development","Manpower","Development",24,0
2008,"Actual","Economic Development","Manpower","Development",35,0
2009,"Actual","Economic Development","Manpower","Development",22,0
2010,"Actual","Economic Development","Manpower","Development",42,0
2011,"Actual","Economic Development","Manpower","Development",62,0
2012,"Actual","Economic Development","Manpower","Development",28,0
2013,"Actual","Economic Development","Manpower","Development",28,0
2014,"Actual","Economic Development","Manpower","Development",37,0
2015,"Actual","Economic Development","Manpower","Development",25,0
2016,"Actual","Economic Development","Manpower","Development",21,0
2017,"Actual","Economic Development","Manpower","Development",34,0
2018,"Actual","Economic Development","Manpower","Development",34,0
2019,"Actual","Economic Development","Manpower","Development",65,0
2020,"Revised","Economic Development","Manpower","Development",85,0
2021,"Estimated","Economic Development","Manpower","Development",98,0
1997,"Actual","Economic Development","Transport","Operating",314,0.002
1998,"Actual","Economic Development","Transport","Operating",442,0.003
1999,"Actual","Economic Development","Transport","Operating",409,0.003
2000,"Actual","Economic Development","Transport","Operating",2390,0.014
2001,"Actual","Economic Development","Transport","Operating",406,0.003
2002,"Actual","Economic Development","Transport","Operating",385,0.002
2003,"Actual","Economic Development","Transport","Operating",292,0.002
2004,"Actual","Economic Development","Transport","Operating",289,0.001
2005,"Actual","Economic Development","Transport","Operating",277,0.001
2006,"Actual","Economic Development","Transport","Operating",285,0.001
2007,"Actual","Economic Development","Transport","Operating",321,0.001
2008,"Actual","Economic Development","Transport","Operating",367,0.001
2009,"Actual","Economic Development","Transport","Operating",371,0.001
2010,"Actual","Economic Development","Transport","Operating",456,0.001
2011,"Actual","Economic Development","Transport","Operating",464,0.001
2012,"Actual","Economic Development","Transport","Operating",502,0.001
2013,"Actual","Economic Development","Transport","Operating",555,0.001
2014,"Actual","Economic Development","Transport","Operating",598,0.001
2015,"Actual","Economic Development","Transport","Operating",783,0.002
2016,"Actual","Economic Development","Transport","Operating",953,0.002
2017,"Actual","Economic Development","Transport","Operating",1607,0.003
2018,"Actual","Economic Development","Transport","Operating",1900,0.004
2019,"Actual","Economic Development","Transport","Operating",1945,0.004
2020,"Revised","Economic Development","Transport","Operating",2835,0.006
2021,"Estimated","Economic Development","Transport","Operating",4051,0.008
1997,"Actual","Economic Development","Transport","Development",1346,0.009
1998,"Actual","Economic Development","Transport","Development",1737,0.012
1999,"Actual","Economic Development","Transport","Development",720,0.005
2000,"Actual","Economic Development","Transport","Development",1130,0.007
2001,"Actual","Economic Development","Transport","Development",1508,0.009
2002,"Actual","Economic Development","Transport","Development",1203,0.007
2003,"Actual","Economic Development","Transport","Development",1115,0.006
2004,"Actual","Economic Development","Transport","Development",1776,0.009
2005,"Actual","Economic Development","Transport","Development",1617,0.007
2006,"Actual","Economic Development","Transport","Development",1518,0.006
2007,"Actual","Economic Development","Transport","Development",1621,0.006
2008,"Actual","Economic Development","Transport","Development",3379,0.013
2009,"Actual","Economic Development","Transport","Development",4082,0.014
2010,"Actual","Economic Development","Transport","Development",4250,0.013
2011,"Actual","Economic Development","Transport","Development",4003,0.011
2012,"Actual","Economic Development","Transport","Development",5414,0.015
2013,"Actual","Economic Development","Transport","Development",5504,0.014
2014,"Actual","Economic Development","Transport","Development",5489,0.014
2015,"Actual","Economic Development","Transport","Development",10332,0.024
2016,"Actual","Economic Development","Transport","Development",9319,0.021
2017,"Actual","Economic Development","Transport","Development",7572,0.016
2018,"Actual","Economic Development","Transport","Development",9877,0.019
2019,"Actual","Economic Development","Transport","Development",6617,0.013
2020,"Revised","Economic Development","Transport","Development",5194,0.011
2021,"Estimated","Economic Development","Transport","Development",7015,0.014
1997,"Actual","Economic Development","Trade and Industry","Operating",341,0.002
1998,"Actual","Economic Development","Trade and Industry","Operating",315,0.002
1999,"Actual","Economic Development","Trade and Industry","Operating",366,0.002
2000,"Actual","Economic Development","Trade and Industry","Operating",412,0.002
2001,"Actual","Economic Development","Trade and Industry","Operating",553,0.003
2002,"Actual","Economic Development","Trade and Industry","Operating",564,0.003
2003,"Actual","Economic Development","Trade and Industry","Operating",497,0.003
2004,"Actual","Economic Development","Trade and Industry","Operating",392,0.002
2005,"Actual","Economic Development","Trade and Industry","Operating",436,0.002
2006,"Actual","Economic Development","Trade and Industry","Operating",473,0.002
2007,"Actual","Economic Development","Trade and Industry","Operating",528,0.002
2008,"Actual","Economic Development","Trade and Industry","Operating",660,0.002
2009,"Actual","Economic Development","Trade and Industry","Operating",704,0.002
2010,"Actual","Economic Development","Trade and Industry","Operating",684,0.002
2011,"Actual","Economic Development","Trade and Industry","Operating",671,0.002
2012,"Actual","Economic Development","Trade and Industry","Operating",685,0.002
2013,"Actual","Economic Development","Trade and Industry","Operating",710,0.002
2014,"Actual","Economic Development","Trade and Industry","Operating",729,0.002
2015,"Actual","Economic Development","Trade and Industry","Operating",783,0.002
2016,"Actual","Economic Development","Trade and Industry","Operating",921,0.002
2017,"Actual","Economic Development","Trade and Industry","Operating",943,0.002
2018,"Actual","Economic Development","Trade and Industry","Operating",993,0.002
2019,"Actual","Economic Development","Trade and Industry","Operating",1116,0.002
2020,"Revised","Economic Development","Trade and Industry","Operating",4002,0.009
2021,"Estimated","Economic Development","Trade and Industry","Operating",2052,0.004
1997,"Actual","Economic Development","Trade and Industry","Development",2175,0.015
1998,"Actual","Economic Development","Trade and Industry","Development",2646,0.019
1999,"Actual","Economic Development","Trade and Industry","Development",2073,0.014
2000,"Actual","Economic Development","Trade and Industry","Development",1820,0.011
2001,"Actual","Economic Development","Trade and Industry","Development",1293,0.008
2002,"Actual","Economic Development","Trade and Industry","Development",1009,0.006
2003,"Actual","Economic Development","Trade and Industry","Development",1421,0.008
2004,"Actual","Economic Development","Trade and Industry","Development",1154,0.006
2005,"Actual","Economic Development","Trade and Industry","Development",1055,0.005
2006,"Actual","Economic Development","Trade and Industry","Development",1207,0.005
2007,"Actual","Economic Development","Trade and Industry","Development",1516,0.005
2008,"Actual","Economic Development","Trade and Industry","Development",2183,0.008
2009,"Actual","Economic Development","Trade and Industry","Development",2334,0.008
2010,"Actual","Economic Development","Trade and Industry","Development",2673,0.008
2011,"Actual","Economic Development","Trade and Industry","Development",2553,0.007
2012,"Actual","Economic Development","Trade and Industry","Development",2387,0.006
2013,"Actual","Economic Development","Trade and Industry","Development",1947,0.005
2014,"Actual","Economic Development","Trade and Industry","Development",2102,0.005
2015,"Actual","Economic Development","Trade and Industry","Development",2398,0.006
2016,"Actual","Economic Development","Trade and Industry","Development",2858,0.006
2017,"Actual","Economic Development","Trade and Industry","Development",2688,0.006
2018,"Actual","Economic Development","Trade and Industry","Development",3656,0.007
2019,"Actual","Economic Development","Trade and Industry","Development",3176,0.006
2020,"Revised","Economic Development","Trade and Industry","Development",5917,0.013
2021,"Estimated","Economic Development","Trade and Industry","Development",5123,0.01
1997,"Actual","Economic Development","Info-Communications and Media Development","Operating",0,0
1998,"Actual","Economic Development","Info-Communications and Media Development","Operating",0,0
1999,"Actual","Economic Development","Info-Communications and Media Development","Operating",0,0
2000,"Actual","Economic Development","Info-Communications and Media Development","Operating",0,0
2001,"Actual","Economic Development","Info-Communications and Media Development","Operating",24,0
2002,"Actual","Economic Development","Info-Communications and Media Development","Operating",28,0
2003,"Actual","Economic Development","Info-Communications and Media Development","Operating",47,0
2004,"Actual","Economic Development","Info-Communications and Media Development","Operating",42,0
2005,"Actual","Economic Development","Info-Communications and Media Development","Operating",39,0
2006,"Actual","Economic Development","Info-Communications and Media Development","Operating",38,0
2007,"Actual","Economic Development","Info-Communications and Media Development","Operating",37,0
2008,"Actual","Economic Development","Info-Communications and Media Development","Operating",34,0
2009,"Actual","Economic Development","Info-Communications and Media Development","Operating",76,0
2010,"Actual","Economic Development","Info-Communications and Media Development","Operating",88,0
2011,"Actual","Economic Development","Info-Communications and Media Development","Operating",160,0
2012,"Actual","Economic Development","Info-Communications and Media Development","Operating",227,0.001
2013,"Actual","Economic Development","Info-Communications and Media Development","Operating",267,0.001
2014,"Actual","Economic Development","Info-Communications and Media Development","Operating",378,0.001
2015,"Actual","Economic Development","Info-Communications and Media Development","Operating",454,0.001
2016,"Actual","Economic Development","Info-Communications and Media Development","Operating",490,0.001
2017,"Actual","Economic Development","Info-Communications and Media Development","Operating",378,0.001
2018,"Actual","Economic Development","Info-Communications and Media Development","Operating",617,0.001
2019,"Actual","Economic Development","Info-Communications and Media Development","Operating",535,0.001
2020,"Revised","Economic Development","Info-Communications and Media Development","Operating",714,0.002
2021,"Estimated","Economic Development","Info-Communications and Media Development","Operating",790,0.002
1997,"Actual","Economic Development","Info-Communications and Media Development","Development",39,0
1998,"Actual","Economic Development","Info-Communications and Media Development","Development",94,0.001
1999,"Actual","Economic Development","Info-Communications and Media Development","Development",82,0.001
2000,"Actual","Economic Development","Info-Communications and Media Development","Development",179,0.001
2001,"Actual","Economic Development","Info-Communications and Media Development","Development",23,0
2002,"Actual","Economic Development","Info-Communications and Media Development","Development",5,0
2003,"Actual","Economic Development","Info-Communications and Media Development","Development",25,0
2004,"Actual","Economic Development","Info-Communications and Media Development","Development",33,0
2005,"Actual","Economic Development","Info-Communications and Media Development","Development",39,0
2006,"Actual","Economic Development","Info-Communications and Media Development","Development",46,0
2007,"Actual","Economic Development","Info-Communications and Media Development","Development",28,0
2008,"Actual","Economic Development","Info-Communications and Media Development","Development",48,0
2009,"Actual","Economic Development","Info-Communications and Media Development","Development",38,0
2010,"Actual","Economic Development","Info-Communications and Media Development","Development",525,0.002
2011,"Actual","Economic Development","Info-Communications and Media Development","Development",278,0.001
2012,"Actual","Economic Development","Info-Communications and Media Development","Development",126,0
2013,"Actual","Economic Development","Info-Communications and Media Development","Development",68,0
2014,"Actual","Economic Development","Info-Communications and Media Development","Development",296,0.001
2015,"Actual","Economic Development","Info-Communications and Media Development","Development",153,0
2016,"Actual","Economic Development","Info-Communications and Media Development","Development",105,0
2017,"Actual","Economic Development","Info-Communications and Media Development","Development",4,0
2018,"Actual","Economic Development","Info-Communications and Media Development","Development",8,0
2019,"Actual","Economic Development","Info-Communications and Media Development","Development",29,0
2020,"Revised","Economic Development","Info-Communications and Media Development","Development",54,0
2021,"Estimated","Economic Development","Info-Communications and Media Development","Development",22,0
1997,"Actual","Government Administration","Finance","Operating",298,0.002
1998,"Actual","Government Administration","Finance","Operating",310,0.002
1999,"Actual","Government Administration","Finance","Operating",339,0.002
2000,"Actual","Government Administration","Finance","Operating",388,0.002
2001,"Actual","Government Administration","Finance","Operating",352,0.002
2002,"Actual","Government Administration","Finance","Operating",379,0.002
2003,"Actual","Government Administration","Finance","Operating",333,0.002
2004,"Actual","Government Administration","Finance","Operating",318,0.002
2005,"Actual","Government Administration","Finance","Operating",345,0.002
2006,"Actual","Government Administration","Finance","Operating",428,0.002
2007,"Actual","Government Administration","Finance","Operating",438,0.002
2008,"Actual","Government Administration","Finance","Operating",484,0.002
2009,"Actual","Government Administration","Finance","Operating",528,0.002
2010,"Actual","Government Administration","Finance","Operating",552,0.002
2011,"Actual","Government Administration","Finance","Operating",617,0.002
2012,"Actual","Government Administration","Finance","Operating",631,0.002
2013,"Actual","Government Administration","Finance","Operating",711,0.002
2014,"Actual","Government Administration","Finance","Operating",682,0.002
2015,"Actual","Government Administration","Finance","Operating",740,0.002
2016,"Actual","Government Administration","Finance","Operating",824,0.002
2017,"Actual","Government Administration","Finance","Operating",833,0.002
2018,"Actual","Government Administration","Finance","Operating",828,0.002
2019,"Actual","Government Administration","Finance","Operating",852,0.002
2020,"Revised","Government Administration","Finance","Operating",1341,0.003
2021,"Estimated","Government Administration","Finance","Operating",1928,0.004
1997,"Actual","Government Administration","Finance","Development",240,0.002
1998,"Actual","Government Administration","Finance","Development",338,0.002
1999,"Actual","Government Administration","Finance","Development",199,0.001
2000,"Actual","Government Administration","Finance","Development",57,0
2001,"Actual","Government Administration","Finance","Development",70,0
2002,"Actual","Government Administration","Finance","Development",100,0.001
2003,"Actual","Government Administration","Finance","Development",214,0.001
2004,"Actual","Government Administration","Finance","Development",308,0.002
2005,"Actual","Government Administration","Finance","Development",350,0.002
2006,"Actual","Government Administration","Finance","Development",10,0
2007,"Actual","Government Administration","Finance","Development",44,0
2008,"Actual","Government Administration","Finance","Development",25,0
2009,"Actual","Government Administration","Finance","Development",17,0
2010,"Actual","Government Administration","Finance","Development",21,0
2011,"Actual","Government Administration","Finance","Development",30,0
2012,"Actual","Government Administration","Finance","Development",24,0
2013,"Actual","Government Administration","Finance","Development",25,0
2014,"Actual","Government Administration","Finance","Development",44,0
2015,"Actual","Government Administration","Finance","Development",53,0
2016,"Actual","Government Administration","Finance","Development",72,0
2017,"Actual","Government Administration","Finance","Development",62,0
2018,"Actual","Government Administration","Finance","Development",74,0
2019,"Actual","Government Administration","Finance","Development",56,0
2020,"Revised","Government Administration","Finance","Development",97,0
2021,"Estimated","Government Administration","Finance","Development",140,0
1997,"Actual","Government Administration","Law","Operating",89,0.001
1998,"Actual","Government Administration","Law","Operating",97,0.001
1999,"Actual","Government Administration","Law","Operating",109,0.001
2000,"Actual","Government Administration","Law","Operating",120,0.001
2001,"Actual","Government Administration","Law","Operating",112,0.001
2002,"Actual","Government Administration","Law","Operating",103,0.001
2003,"Actual","Government Administration","Law","Operating",96,0.001
2004,"Actual","Government Administration","Law","Operating",97,0
2005,"Actual","Government Administration","Law","Operating",100,0
2006,"Actual","Government Administration","Law","Operating",106,0
2007,"Actual","Government Administration","Law","Operating",107,0
2008,"Actual","Government Administration","Law","Operating",118,0
2009,"Actual","Government Administration","Law","Operating",127,0
2010,"Actual","Government Administration","Law","Operating",119,0
2011,"Actual","Government Administration","Law","Operating",123,0
2012,"Actual","Government Administration","Law","Operating",163,0
2013,"Actual","Government Administration","Law","Operating",167,0
2014,"Actual","Government Administration","Law","Operating",177,0
2015,"Actual","Government Administration","Law","Operating",174,0
2016,"Actual","Government Administration","Law","Operating",181,0
2017,"Actual","Government Administration","Law","Operating",185,0
2018,"Actual","Government Administration","Law","Operating",185,0
2019,"Actual","Government Administration","Law","Operating",218,0
2020,"Revised","Government Administration","Law","Operating",201,0
2021,"Estimated","Government Administration","Law","Operating",261,0.001
1997,"Actual","Government Administration","Law","Development",435,0.003
1998,"Actual","Government Administration","Law","Development",402,0.003
1999,"Actual","Government Administration","Law","Development",310,0.002
2000,"Actual","Government Administration","Law","Development",131,0.001
2001,"Actual","Government Administration","Law","Development",213,0.001
2002,"Actual","Government Administration","Law","Development",325,0.002
2003,"Actual","Government Administration","Law","Development",184,0.001
2004,"Actual","Government Administration","Law","Development",329,0.002
2005,"Actual","Government Administration","Law","Development",218,0.001
2006,"Actual","Government Administration","Law","Development",167,0.001
2007,"Actual","Government Administration","Law","Development",123,0
2008,"Actual","Government Administration","Law","Development",153,0.001
2009,"Actual","Government Administration","Law","Development",166,0.001
2010,"Actual","Government Administration","Law","Development",148,0
2011,"Actual","Government Administration","Law","Development",130,0
2012,"Actual","Government Administration","Law","Development",316,0.001
2013,"Actual","Government Administration","Law","Development",273,0.001
2014,"Actual","Government Administration","Law","Development",434,0.001
2015,"Actual","Government Administration","Law","Development",319,0.001
2016,"Actual","Government Administration","Law","Development",377,0.001
2017,"Actual","Government Administration","Law","Development",320,0.001
2018,"Actual","Government Administration","Law","Development",217,0
2019,"Actual","Government Administration","Law","Development",311,0.001
2020,"Revised","Government Administration","Law","Development",22,0
2021,"Estimated","Government Administration","Law","Development",220,0
1997,"Actual","Government Administration","Organs of State","Operating",150,0.001
1998,"Actual","Government Administration","Organs of State","Operating",135,0.001
1999,"Actual","Government Administration","Organs of State","Operating",136,0.001
2000,"Actual","Government Administration","Organs of State","Operating",170,0.001
2001,"Actual","Government Administration","Organs of State","Operating",173,0.001
2002,"Actual","Government Administration","Organs of State","Operating",186,0.001
2003,"Actual","Government Administration","Organs of State","Operating",182,0.001
2004,"Actual","Government Administration","Organs of State","Operating",187,0.001
2005,"Actual","Government Administration","Organs of State","Operating",186,0.001
2006,"Actual","Government Administration","Organs of State","Operating",195,0.001
2007,"Actual","Government Administration","Organs of State","Operating",247,0.001
2008,"Actual","Government Administration","Organs of State","Operating",235,0.001
2009,"Actual","Government Administration","Organs of State","Operating",249,0.001
2010,"Actual","Government Administration","Organs of State","Operating",313,0.001
2011,"Actual","Government Administration","Organs of State","Operating",318,0.001
2012,"Actual","Government Administration","Organs of State","Operating",326,0.001
2013,"Actual","Government Administration","Organs of State","Operating",352,0.001
2014,"Actual","Government Administration","Organs of State","Operating",384,0.001
2015,"Actual","Government Administration","Organs of State","Operating",410,0.001
2016,"Actual","Government Administration","Organs of State","Operating",440,0.001
2017,"Actual","Government Administration","Organs of State","Operating",473,0.001
2018,"Actual","Government Administration","Organs of State","Operating",496,0.001
2019,"Actual","Government Administration","Organs of State","Operating",508,0.001
2020,"Revised","Government Administration","Organs of State","Operating",531,0.001
2021,"Estimated","Government Administration","Organs of State","Operating",607,0.001
1997,"Actual","Government Administration","Organs of State","Development",39,0
1998,"Actual","Government Administration","Organs of State","Development",98,0.001
1999,"Actual","Government Administration","Organs of State","Development",251,0.002
2000,"Actual","Government Administration","Organs of State","Development",38,0
2001,"Actual","Government Administration","Organs of State","Development",30,0
2002,"Actual","Government Administration","Organs of State","Development",33,0
2003,"Actual","Government Administration","Organs of State","Development",47,0
2004,"Actual","Government Administration","Organs of State","Development",151,0.001
2005,"Actual","Government Administration","Organs of State","Development",31,0
2006,"Actual","Government Administration","Organs of State","Development",11,0
2007,"Actual","Government Administration","Organs of State","Development",6,0
2008,"Actual","Government Administration","Organs of State","Development",10,0
2009,"Actual","Government Administration","Organs of State","Development",17,0
2010,"Actual","Government Administration","Organs of State","Development",14,0
2011,"Actual","Government Administration","Organs of State","Development",17,0
2012,"Actual","Government Administration","Organs of State","Development",163,0
2013,"Actual","Government Administration","Organs of State","Development",22,0
2014,"Actual","Government Administration","Organs of State","Development",23,0
2015,"Actual","Government Administration","Organs of State","Development",47,0
2016,"Actual","Government Administration","Organs of State","Development",55,0
2017,"Actual","Government Administration","Organs of State","Development",105,0
2018,"Actual","Government Administration","Organs of State","Development",184,0
2019,"Actual","Government Administration","Organs of State","Development",217,0
2020,"Revised","Government Administration","Organs of State","Development",63,0
2021,"Estimated","Government Administration","Organs of State","Development",104,0
1997,"Actual","Government Administration","Prime Minister's Office","Operating",121,0.001
1998,"Actual","Government Administration","Prime Minister's Office","Operating",123,0.001
1999,"Actual","Government Administration","Prime Minister's Office","Operating",108,0.001
2000,"Actual","Government Administration","Prime Minister's Office","Operating",134,0.001
2001,"Actual","Government Administration","Prime Minister's Office","Operating",151,0.001
2002,"Actual","Government Administration","Prime Minister's Office","Operating",143,0.001
2003,"Actual","Government Administration","Prime Minister's Office","Operating",135,0.001
2004,"Actual","Government Administration","Prime Minister's Office","Operating",141,0.001
2005,"Actual","Government Administration","Prime Minister's Office","Operating",136,0.001
2006,"Actual","Government Administration","Prime Minister's Office","Operating",151,0.001
2007,"Actual","Government Administration","Prime Minister's Office","Operating",176,0.001
2008,"Actual","Government Administration","Prime Minister's Office","Operating",194,0.001
2009,"Actual","Government Administration","Prime Minister's Office","Operating",203,0.001
2010,"Actual","Government Administration","Prime Minister's Office","Operating",240,0.001
2011,"Actual","Government Administration","Prime Minister's Office","Operating",273,0.001
2012,"Actual","Government Administration","Prime Minister's Office","Operating",259,0.001
2013,"Actual","Government Administration","Prime Minister's Office","Operating",290,0.001
2014,"Actual","Government Administration","Prime Minister's Office","Operating",318,0.001
2015,"Actual","Government Administration","Prime Minister's Office","Operating",381,0.001
2016,"Actual","Government Administration","Prime Minister's Office","Operating",374,0.001
2017,"Actual","Government Administration","Prime Minister's Office","Operating",653,0.001
2018,"Actual","Government Administration","Prime Minister's Office","Operating",670,0.001
2019,"Actual","Government Administration","Prime Minister's Office","Operating",746,0.001
2020,"Revised","Government Administration","Prime Minister's Office","Operating",798,0.002
2021,"Estimated","Government Administration","Prime Minister's Office","Operating",973,0.002
1997,"Actual","Government Administration","Prime Minister's Office","Development",52,0
1998,"Actual","Government Administration","Prime Minister's Office","Development",32,0
1999,"Actual","Government Administration","Prime Minister's Office","Development",25,0
2000,"Actual","Government Administration","Prime Minister's Office","Development",18,0
2001,"Actual","Government Administration","Prime Minister's Office","Development",18,0
2002,"Actual","Government Administration","Prime Minister's Office","Development",41,0
2003,"Actual","Government Administration","Prime Minister's Office","Development",42,0
2004,"Actual","Government Administration","Prime Minister's Office","Development",40,0
2005,"Actual","Government Administration","Prime Minister's Office","Development",32,0
2006,"Actual","Government Administration","Prime Minister's Office","Development",25,0
2007,"Actual","Government Administration","Prime Minister's Office","Development",14,0
2008,"Actual","Government Administration","Prime Minister's Office","Development",9,0
2009,"Actual","Government Administration","Prime Minister's Office","Development",12,0
2010,"Actual","Government Administration","Prime Minister's Office","Development",34,0
2011,"Actual","Government Administration","Prime Minister's Office","Development",20,0
2012,"Actual","Government Administration","Prime Minister's Office","Development",23,0
2013,"Actual","Government Administration","Prime Minister's Office","Development",40,0
2014,"Actual","Government Administration","Prime Minister's Office","Development",38,0
2015,"Actual","Government Administration","Prime Minister's Office","Development",38,0
2016,"Actual","Government Administration","Prime Minister's Office","Development",40,0
2017,"Actual","Government Administration","Prime Minister's Office","Development",123,0
2018,"Actual","Government Administration","Prime Minister's Office","Development",159,0
2019,"Actual","Government Administration","Prime Minister's Office","Development",172,0
2020,"Revised","Government Administration","Prime Minister's Office","Development",200,0
2021,"Estimated","Government Administration","Prime Minister's Office","Development",293,0.001`.replaceAll(
  '"',
  ""
);
