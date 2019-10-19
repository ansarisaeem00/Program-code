<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 

<xsl:template match="/">

<html>
  <body>
  <h2 color="cyan">Semester 5 Marks</h2>
	<table style="font-size: 20px; color: cyan;" border="2px" >
	<xsl:for-each select="student/semester5">
	
<tr><td>CN <xsl:value-of select="cn"/></td></tr>
<tr><td>WTL <xsl:value-of select="wtl"/></td></tr>
<tr><td>OS <xsl:value-of select="os"/></td></tr>
<tr><td>SOAD <xsl:value-of select="soad"/></td></tr>
<tr><td>MP <xsl:value-of select="mp"/></td></tr>
		
	</xsl:for-each>
	</table>
</body>
</html>
</xsl:template>

</xsl:stylesheet>

