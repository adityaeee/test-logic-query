-- soal 4

-- 4-a
SELECT  
     KODE, NAMA, HARGA
FROM barang
WHERE HARGA > 10000
ORDER BY HARGA ASC;

-- 4-b
SELECT KODE, NAMA, ALAMAT
FROM pelanggan
WHERE NAMA LIKE '%g%' AND ALAMAT = 'BANDUNG'

-- 4-c
SELECT
     transaksi.KODE AS KODE,
     transaksi.TANGGAL AS TANGGAL,
     pelanggan.NAMA AS "NAMA PELANGGAN",
     pelanggan.NAMA AS "NAMA BARANG",
     transaksi.JUMLAH_BARANG AS JUMLAH,
     barang.HARGA AS "HARGA SATUAN",
     (transaksi.JUMLAH_BARANG * barang.HARGA) AS TOTAL
          
FROM transaksi
JOIN
     pelanggan ON transaksi.KODE_PELANGGAN = pelanggan.KODE
JOIN
     barang ON transaksi.KODE_BARANG = barang.KODE




-- 4-d
SELECT
     pelanggan.NAMA AS "NAMA PELANGGAN", 
     SUM(transaksi.JUMLAH_BARANG) AS "JUMLAH", 
     SUM(transaksi.JUMLAH_BARANG * barang.HARGA) AS "TOTAL HARGA"
          
FROM transaksi
JOIN
     pelanggan ON transaksi.KODE_PELANGGAN = pelanggan.KODE
JOIN
     barang ON transaksi.KODE_BARANG = barang.KODE
GROUP BY 
    pelanggan.NAMA;