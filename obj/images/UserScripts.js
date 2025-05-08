//##SendTimeStamp##:28##
function SendTimeStamp()
{
var dt = new Date();

var year = dt.getFullYear();
var month = dt.getMonth(); 
var day = dt.getDate(); 
var week = dt.getDay();
var hour = dt.getHours();
var minute = dt.getMinutes();
var second = dt.getSeconds();
var ms = dt.getMilliseconds();

HmiRuntime.JS_SetValue(1028,year);
HmiRuntime.JS_SetValue(1029,month + 1);
HmiRuntime.JS_SetValue(1030,day);
HmiRuntime.JS_SetValue(1031,week);
HmiRuntime.JS_SetValue(1032,hour);
HmiRuntime.JS_SetValue(1033,minute);
HmiRuntime.JS_SetValue(1034,second);
HmiRuntime.JS_SetValue(1035,ms);









}
//##AOSendDataLog##:136##
function AOSendDataLog()
{
HmiRuntime.JS_LogTag(1583);
HmiRuntime.JS_LogTag(1589);
HmiRuntime.JS_LogTag(1590);
HmiRuntime.JS_LogTag(1287);
HmiRuntime.JS_LogTag(1606);
HmiRuntime.JS_LogTag(1595);
HmiRuntime.JS_LogTag(1599);
HmiRuntime.JS_LogTag(1577);
HmiRuntime.JS_LogTag(1894);
HmiRuntime.JS_LogTag(1603);

HmiRuntime.JS_LogTag(1953);
HmiRuntime.JS_LogTag(1954);
HmiRuntime.JS_LogTag(1955);
HmiRuntime.JS_LogTag(1956);
HmiRuntime.JS_LogTag(1957);
HmiRuntime.JS_LogTag(1958);
HmiRuntime.JS_LogTag(1959);
HmiRuntime.JS_LogTag(1960);
HmiRuntime.JS_LogTag(1961);
HmiRuntime.JS_LogTag(1962);
HmiRuntime.JS_LogTag(1963);
HmiRuntime.JS_LogTag(1964);
HmiRuntime.JS_LogTag(1965);
HmiRuntime.JS_LogTag(1966);
HmiRuntime.JS_LogTag(1967);
HmiRuntime.JS_LogTag(1968);
HmiRuntime.JS_LogTag(1969);
HmiRuntime.JS_LogTag(1970);
HmiRuntime.JS_LogTag(1971);
HmiRuntime.JS_LogTag(1972);
HmiRuntime.JS_LogTag(1973);
HmiRuntime.JS_LogTag(1974);
HmiRuntime.JS_LogTag(1975);
HmiRuntime.JS_LogTag(1976);
HmiRuntime.JS_LogTag(1977);
HmiRuntime.JS_LogTag(1978);
HmiRuntime.JS_LogTag(1979);
HmiRuntime.JS_LogTag(1980);
HmiRuntime.JS_LogTag(1981);
HmiRuntime.JS_LogTag(1982);
HmiRuntime.JS_LogTag(1983);
HmiRuntime.JS_LogTag(1984);
HmiRuntime.JS_LogTag(1985);
HmiRuntime.JS_LogTag(1986);
HmiRuntime.JS_LogTag(1987);
HmiRuntime.JS_LogTag(1988);
HmiRuntime.JS_LogTag(1989);
HmiRuntime.JS_LogTag(1990);
HmiRuntime.JS_LogTag(1991);
HmiRuntime.JS_LogTag(1992);

HmiRuntime.JS_LogTag(1648);
HmiRuntime.JS_LogTag(1649);
HmiRuntime.JS_LogTag(1650);
HmiRuntime.JS_LogTag(1651);
HmiRuntime.JS_LogTag(1652);
HmiRuntime.JS_LogTag(1653);
HmiRuntime.JS_LogTag(1654);
HmiRuntime.JS_LogTag(1655);
HmiRuntime.JS_LogTag(1656);
HmiRuntime.JS_LogTag(1657);
HmiRuntime.JS_LogTag(1658);
HmiRuntime.JS_LogTag(1659);
HmiRuntime.JS_LogTag(1660);
HmiRuntime.JS_LogTag(1661);
HmiRuntime.JS_LogTag(1662);
HmiRuntime.JS_LogTag(1663);
HmiRuntime.JS_LogTag(1664);
HmiRuntime.JS_LogTag(1665);
HmiRuntime.JS_LogTag(1666);
HmiRuntime.JS_LogTag(1667);
HmiRuntime.JS_LogTag(1668);
HmiRuntime.JS_LogTag(1669);
HmiRuntime.JS_LogTag(1670);
HmiRuntime.JS_LogTag(1671);
HmiRuntime.JS_LogTag(1672);
HmiRuntime.JS_LogTag(1673);
HmiRuntime.JS_LogTag(1674);
HmiRuntime.JS_LogTag(1675);
HmiRuntime.JS_LogTag(1676);
HmiRuntime.JS_LogTag(1677);
HmiRuntime.JS_LogTag(1678);
HmiRuntime.JS_LogTag(1679);
HmiRuntime.JS_LogTag(1680);
HmiRuntime.JS_LogTag(1681);
HmiRuntime.JS_LogTag(1682);
HmiRuntime.JS_LogTag(1683);
HmiRuntime.JS_LogTag(1684);
HmiRuntime.JS_LogTag(1685);
HmiRuntime.JS_LogTag(1686);
HmiRuntime.JS_LogTag(1687);

HmiRuntime.JS_LogTag(2033);
HmiRuntime.JS_LogTag(2034);
HmiRuntime.JS_LogTag(2035);
HmiRuntime.JS_LogTag(2036);
HmiRuntime.JS_LogTag(2037);
HmiRuntime.JS_LogTag(2038);
HmiRuntime.JS_LogTag(2039);
HmiRuntime.JS_LogTag(2040);
HmiRuntime.JS_LogTag(2041);
HmiRuntime.JS_LogTag(2042);
HmiRuntime.JS_LogTag(2043);
HmiRuntime.JS_LogTag(2044);
HmiRuntime.JS_LogTag(2045);
HmiRuntime.JS_LogTag(2046);
HmiRuntime.JS_LogTag(2047);
HmiRuntime.JS_LogTag(2048);
HmiRuntime.JS_LogTag(2049);
HmiRuntime.JS_LogTag(2050);
HmiRuntime.JS_LogTag(2051);
HmiRuntime.JS_LogTag(2052);
HmiRuntime.JS_LogTag(2053);
HmiRuntime.JS_LogTag(2054);
HmiRuntime.JS_LogTag(2055);
HmiRuntime.JS_LogTag(2056);
HmiRuntime.JS_LogTag(2057);
HmiRuntime.JS_LogTag(2058);
HmiRuntime.JS_LogTag(2059);
HmiRuntime.JS_LogTag(2060);
HmiRuntime.JS_LogTag(2061);
HmiRuntime.JS_LogTag(2062);
HmiRuntime.JS_LogTag(2063);
HmiRuntime.JS_LogTag(2064);
HmiRuntime.JS_LogTag(2065);
HmiRuntime.JS_LogTag(2066);
HmiRuntime.JS_LogTag(2067);
HmiRuntime.JS_LogTag(2068);
HmiRuntime.JS_LogTag(2069);
HmiRuntime.JS_LogTag(2070);
HmiRuntime.JS_LogTag(2071);
HmiRuntime.JS_LogTag(2072);



}
//##AITestDataLog##:136##
function AITestDataLog()
{
HmiRuntime.JS_LogTag(1584);
HmiRuntime.JS_LogTag(1591);
HmiRuntime.JS_LogTag(1592);
HmiRuntime.JS_LogTag(1366);
HmiRuntime.JS_LogTag(1607);
HmiRuntime.JS_LogTag(1596);
HmiRuntime.JS_LogTag(1600);
HmiRuntime.JS_LogTag(1578);
HmiRuntime.JS_LogTag(1895);
HmiRuntime.JS_LogTag(1604);

HmiRuntime.JS_LogTag(1913);
HmiRuntime.JS_LogTag(1914);
HmiRuntime.JS_LogTag(1915);
HmiRuntime.JS_LogTag(1916);
HmiRuntime.JS_LogTag(1917);
HmiRuntime.JS_LogTag(1918);
HmiRuntime.JS_LogTag(1919);
HmiRuntime.JS_LogTag(1920);
HmiRuntime.JS_LogTag(1921);
HmiRuntime.JS_LogTag(1922);
HmiRuntime.JS_LogTag(1923);
HmiRuntime.JS_LogTag(1924);
HmiRuntime.JS_LogTag(1925);
HmiRuntime.JS_LogTag(1926);
HmiRuntime.JS_LogTag(1927);
HmiRuntime.JS_LogTag(1928);
HmiRuntime.JS_LogTag(1929);
HmiRuntime.JS_LogTag(1930);
HmiRuntime.JS_LogTag(1931);
HmiRuntime.JS_LogTag(1932);
HmiRuntime.JS_LogTag(1933);
HmiRuntime.JS_LogTag(1934);
HmiRuntime.JS_LogTag(1935);
HmiRuntime.JS_LogTag(1936);
HmiRuntime.JS_LogTag(1937);
HmiRuntime.JS_LogTag(1938);
HmiRuntime.JS_LogTag(1939);
HmiRuntime.JS_LogTag(1940);
HmiRuntime.JS_LogTag(1941);
HmiRuntime.JS_LogTag(1942);
HmiRuntime.JS_LogTag(1943);
HmiRuntime.JS_LogTag(1944);
HmiRuntime.JS_LogTag(1945);
HmiRuntime.JS_LogTag(1946);
HmiRuntime.JS_LogTag(1947);
HmiRuntime.JS_LogTag(1948);
HmiRuntime.JS_LogTag(1949);
HmiRuntime.JS_LogTag(1950);
HmiRuntime.JS_LogTag(1951);
HmiRuntime.JS_LogTag(1952);

HmiRuntime.JS_LogTag(1608);
HmiRuntime.JS_LogTag(1609);
HmiRuntime.JS_LogTag(1610);
HmiRuntime.JS_LogTag(1611);
HmiRuntime.JS_LogTag(1612);
HmiRuntime.JS_LogTag(1613);
HmiRuntime.JS_LogTag(1614);
HmiRuntime.JS_LogTag(1615);
HmiRuntime.JS_LogTag(1616);
HmiRuntime.JS_LogTag(1617);
HmiRuntime.JS_LogTag(1618);
HmiRuntime.JS_LogTag(1619);
HmiRuntime.JS_LogTag(1620);
HmiRuntime.JS_LogTag(1621);
HmiRuntime.JS_LogTag(1622);
HmiRuntime.JS_LogTag(1623);
HmiRuntime.JS_LogTag(1624);
HmiRuntime.JS_LogTag(1625);
HmiRuntime.JS_LogTag(1626);
HmiRuntime.JS_LogTag(1627);
HmiRuntime.JS_LogTag(1628);
HmiRuntime.JS_LogTag(1629);
HmiRuntime.JS_LogTag(1630);
HmiRuntime.JS_LogTag(1631);
HmiRuntime.JS_LogTag(1632);
HmiRuntime.JS_LogTag(1633);
HmiRuntime.JS_LogTag(1634);
HmiRuntime.JS_LogTag(1635);
HmiRuntime.JS_LogTag(1636);
HmiRuntime.JS_LogTag(1637);
HmiRuntime.JS_LogTag(1638);
HmiRuntime.JS_LogTag(1639);
HmiRuntime.JS_LogTag(1640);
HmiRuntime.JS_LogTag(1641);
HmiRuntime.JS_LogTag(1642);
HmiRuntime.JS_LogTag(1643);
HmiRuntime.JS_LogTag(1644);
HmiRuntime.JS_LogTag(1645);
HmiRuntime.JS_LogTag(1646);
HmiRuntime.JS_LogTag(1647);

HmiRuntime.JS_LogTag(1993);
HmiRuntime.JS_LogTag(1994);
HmiRuntime.JS_LogTag(1995);
HmiRuntime.JS_LogTag(1996);
HmiRuntime.JS_LogTag(1997);
HmiRuntime.JS_LogTag(1998);
HmiRuntime.JS_LogTag(1999);
HmiRuntime.JS_LogTag(2000);
HmiRuntime.JS_LogTag(2001);
HmiRuntime.JS_LogTag(2002);
HmiRuntime.JS_LogTag(2003);
HmiRuntime.JS_LogTag(2004);
HmiRuntime.JS_LogTag(2005);
HmiRuntime.JS_LogTag(2006);
HmiRuntime.JS_LogTag(2007);
HmiRuntime.JS_LogTag(2008);
HmiRuntime.JS_LogTag(2009);
HmiRuntime.JS_LogTag(2010);
HmiRuntime.JS_LogTag(2011);
HmiRuntime.JS_LogTag(2012);
HmiRuntime.JS_LogTag(2013);
HmiRuntime.JS_LogTag(2014);
HmiRuntime.JS_LogTag(2015);
HmiRuntime.JS_LogTag(2016);
HmiRuntime.JS_LogTag(2017);
HmiRuntime.JS_LogTag(2018);
HmiRuntime.JS_LogTag(2019);
HmiRuntime.JS_LogTag(2020);
HmiRuntime.JS_LogTag(2021);
HmiRuntime.JS_LogTag(2022);
HmiRuntime.JS_LogTag(2023);
HmiRuntime.JS_LogTag(2024);
HmiRuntime.JS_LogTag(2025);
HmiRuntime.JS_LogTag(2026);
HmiRuntime.JS_LogTag(2027);
HmiRuntime.JS_LogTag(2028);
HmiRuntime.JS_LogTag(2029);
HmiRuntime.JS_LogTag(2030);
HmiRuntime.JS_LogTag(2031);
HmiRuntime.JS_LogTag(2032);



}
//##DOSendDataLog##:9##
function DOSendDataLog()
{
HmiRuntime.JS_LogTag(1581);
HmiRuntime.JS_LogTag(1585);
HmiRuntime.JS_LogTag(1586);
HmiRuntime.JS_LogTag(1019);
HmiRuntime.JS_LogTag(1593);
HmiRuntime.JS_LogTag(1597);
HmiRuntime.JS_LogTag(1605);
HmiRuntime.JS_LogTag(1893);
HmiRuntime.JS_LogTag(1601);
}
//##DISendDataLog##:9##
function DISendDataLog()
{
HmiRuntime.JS_LogTag(1582);
HmiRuntime.JS_LogTag(1587);
HmiRuntime.JS_LogTag(1588);
HmiRuntime.JS_LogTag(1888);
HmiRuntime.JS_LogTag(1594);
HmiRuntime.JS_LogTag(1598);
HmiRuntime.JS_LogTag(1912);
HmiRuntime.JS_LogTag(1267);
HmiRuntime.JS_LogTag(1602);
}
//##DDSendDataLog##:13##
function DDSendDataLog()
{
HmiRuntime.JS_LogTag(1885);
HmiRuntime.JS_LogTag(1886);
HmiRuntime.JS_LogTag(1887);
HmiRuntime.JS_LogTag(1889);
HmiRuntime.JS_LogTag(1890);
HmiRuntime.JS_LogTag(1891);

HmiRuntime.JS_LogTag(2082);
HmiRuntime.JS_LogTag(2083);
HmiRuntime.JS_LogTag(2084);
HmiRuntime.JS_LogTag(2085);

HmiRuntime.JS_LogTag(1892);
}
