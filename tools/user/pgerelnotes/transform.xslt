<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:variable name="newline" select="'&#xA;'"/>

  <xsl:output
    method = "text"
    encoding = "UTF-8"
    indent = "yes"

    />
  
  <xsl:template match="/">---
title: EDB Postgres Extended Server <xsl:value-of select="$version"/> release notes
navTitle: Release notes
--- 
<xsl:value-of select="$newline"/>
<xsl:apply-templates/>
  </xsl:template>

 <xsl:template match="sect1">
    <xsl:apply-templates select="title" mode="sect1"/>
    <xsl:apply-templates select="formalpara" mode="sect1"/>
        <xsl:value-of select="$newline"/>
    <xsl:apply-templates select="para" mode="para"/>
        <xsl:value-of select="$newline"/>
    <xsl:apply-templates select="sect2"/>
  </xsl:template>

  <xsl:template match="sect2">
    <xsl:apply-templates select="title" mode="sect2"/>
    <xsl:apply-templates select="para" mode="para"/>
    <xsl:value-of select="$newline"/>
    <xsl:apply-templates select="itemizedlist"/>
  </xsl:template>
  
  <xsl:template match="itemizedlist">
    <xsl:apply-templates select="listitem"/>
  </xsl:template>

  <xsl:template match="listitem">
    <xsl:text>- </xsl:text><xsl:apply-templates select="para[1]" mode="oneline"/>
    <xsl:value-of select="$newline"/>
    <xsl:apply-templates select="para[2]"/>
    <xsl:value-of select="$newline"/>
  </xsl:template>

  <xsl:template match="title" mode="sect1">
## <xsl:value-of select="."/>
  <xsl:value-of select="$newline"/>
  </xsl:template>
  
  <xsl:template match="title" mode="sect2">
### <xsl:value-of select="."/>
  <xsl:value-of select="$newline"/>
    <xsl:value-of select="$newline"/>

    </xsl:template>

  <xsl:template match="formalpara" mode="sect1">
      <xsl:value-of select="$newline"/>
    <xsl:apply-templates select="title" mode="formalpara"/><xsl:text> </xsl:text>
    <xsl:apply-templates select="para" mode="formalpara"/>
    <xsl:value-of select="$newline"/>
  </xsl:template>
  
  <xsl:template match="para" mode="formalpara">
    <xsl:value-of select="normalize-space(.)"/>
  </xsl:template>
  
  <xsl:template match="title" mode="formalpara">
   <xsl:value-of select="."/>  
  </xsl:template>
  
  <xsl:template match="para" mode="oneline">
    <xsl:value-of select="normalize-space(.)"/>
  </xsl:template>

  <xsl:template match="para" mode="para">
    <xsl:for-each select=".">
          <xsl:apply-templates mode="para"/>
    </xsl:for-each>
    <xsl:value-of select="$newline"/>
    <xsl:value-of select="$newline"/>
  </xsl:template>
 
 <xsl:template match="text()" mode="para">
    <xsl:value-of select="normalize-space(.)"/>
  </xsl:template>
  
  <xsl:template match="xref" mode="para">
    <xsl:choose>
      <xsl:when test="@linkend = 'app-pg-dumpall'"> [pg_dumpall](https://www.postgresql.org/docs/<xsl:value-of select="$version"/>/app-pg-dumpall.html) </xsl:when>
      <xsl:when test="@linkend = 'release-13'"> [Postgres 13 release notes](https://www.postgresql.org/docs/13/release.html)</xsl:when>
      <xsl:when test="@linkend = 'release-14'"> [Postgres 14 release notes](https://www.postgresql.org/docs/14/release.html)</xsl:when>
      <xsl:otherwise>
        <xsl:apply-templates/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
  
  <xsl:template match="emphasis" mode="para">
    <xsl:text> **</xsl:text>
    <xsl:value-of select="normalize-space(.)"/>
    <xsl:text>** </xsl:text>
  </xsl:template>

</xsl:stylesheet>
