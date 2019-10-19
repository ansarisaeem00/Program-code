<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>

<body>
  <h2>Anjumain-I-Islam's Kalsekar Technical Campus Marksheet</h2>

  <table style="margin: 20px; padding: 20px;" border="1">
    <tr><th>Semester 1</th></tr>
    
      <tr bgcolor="cyan">

      <th style="text-align:left">BEE</th>
      <th style="text-align:left">CHEM</th>
      <th style="text-align:left">PSY</th>
      <th style="text-align:left">MECH</th>
      <th style="text-align:left">EVS</th>
      <th style="text-align:left">M1</th>

    </tr>
    <xsl:for-each select="student/semester1">
    <tr>
      <td><xsl:value-of select="bee"/></td>
      <td><xsl:value-of select="chem"/></td>
      <td><xsl:value-of select="psy"/></td>
      <td><xsl:value-of select="mech"/></td>
      <td><xsl:value-of select="evs"/></td>
      <td><xsl:value-of select="m1"/></td>
    </tr>
    </xsl:for-each>
    <br/>
    <tr><th>Semester 2</th></tr>
    
      <tr bgcolor="cyan">

      <th style="text-align:left">SPA</th>
      <th style="text-align:left">CHEM 2</th>
      <th style="text-align:left">PSY 2</th>
      <th style="text-align:left">CS</th>
      <th style="text-align:left">ED</th>
      <th style="text-align:left">M2</th>

    </tr>
    <xsl:for-each select="student/semester2">
    <tr>
      <td><xsl:value-of select="spa"/></td>
      <td><xsl:value-of select="chem2"/></td>
      <td><xsl:value-of select="psy2"/></td>
      <td><xsl:value-of select="cs"/></td>
      <td><xsl:value-of select="ed"/></td>
      <td><xsl:value-of select="m2"/></td>
    </tr>
    </xsl:for-each>

    <br/>
    <tr><th>Semester 3</th></tr>
    
      <tr bgcolor="yellow">

      <th style="text-align:left">DLDA</th>
      <th style="text-align:left">DS</th>
      <th style="text-align:left">DIS</th>
      <th style="text-align:left">ECCF</th>
      <th style="text-align:left">M3</th>

    </tr>
    <xsl:for-each select="student/semester3">
    <tr>
      <td><xsl:value-of select="dlda"/></td>
      <td><xsl:value-of select="ds"/></td>
      <td><xsl:value-of select="dis"/></td>
      <td><xsl:value-of select="eccf"/></td>
      <td><xsl:value-of select="m3"/></td>
      </tr>
    </xsl:for-each>
    <br/>
    <tr><th>Semester 4</th></tr>
    
      <tr bgcolor="cyan">

      <th style="text-align:left">DBMS</th>
      <th style="text-align:left">AOA</th>
      <th style="text-align:left">COA</th>
      <th style="text-align:left">TCS</th>
      <th style="text-align:left">M4</th>

    </tr>
    <xsl:for-each select="student/semester4">
    <tr>
      <td><xsl:value-of select="dbms"/></td>
      <td><xsl:value-of select="aoa"/></td>
      <td><xsl:value-of select="coa"/></td>
      <td><xsl:value-of select="tcs"/></td>
      <td><xsl:value-of select="m4"/></td>
    </tr>
    </xsl:for-each>
    
    <br/>
    <tr><th>Semester 5</th></tr>
    
    <tr bgcolor="cyan">
      <th style="text-align:left">CN</th>
      <th style="text-align:left">OS</th>
      <th style="text-align:left">WTL</th>
      <th style="text-align:left">MP</th>
      <th style="text-align:left">SOAD</th>

    </tr>
    <xsl:for-each select="student/semester5">
    <tr>
      <td><xsl:value-of select="cn"/></td>
      <td><xsl:value-of select="os"/></td>
      <td><xsl:value-of select="wtl"/></td>
      <td><xsl:value-of select="mp"/></td>
      <td><xsl:value-of select="soad"/></td>

    </tr>
    </xsl:for-each>

  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

