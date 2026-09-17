@echo off
title Ekspor Struktur Folder untuk AI
echo Sedang memproses struktur folder... Sila tunggu...

:: 1. Membuat header info pencatatan
echo =================================================== > strukturFolderTemplate.txt
echo STRUKTUR FOLDER DAN DAFTAR FILE UNTUK AI >> strukturFolderTemplate.txt
echo Tanggal Pembuatan: %date% %time% >> strukturFolderTemplate.txt
echo Direktori Utama: %cd% >> strukturFolderTemplate.txt
echo =================================================== >> strukturFolderTemplate.txt
echo. >> strukturFolderTemplate.txt

:: 2. Membuat visualisasi pohon folder (Hanya Folder)
echo [BAGAN POHON FOLDER] >> strukturFolderTemplate.txt
tree /a >> strukturFolderTemplate.txt
echo. >> strukturFolderTemplate.txt
echo =================================================== >> strukturFolderTemplate.txt
echo. >> strukturFolderTemplate.txt

:: 3. Membuat daftar lengkap file beserta jalurnya
echo [DAFTAR LENGKAP JALUR FILE] >> strukturFolderTemplate.txt
dir /s /b /a:-h >> strukturFolderTemplate.txt

echo Proses selesai! Hasil disimpan dalam file 'strukturFolderTemplate.txt'.
pause