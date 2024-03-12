<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
        .div{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px
        }
        th{
            padding: 1rem 2rem;
            border-bottom: 3px solid #ddd;
        }
        tr{
           
        }

        table{
            width: 80%;
            margin: 0 auto;
            border:3px solid #ddd; 
        }
        .judul{
            text-align: center
        }
    </style>
</head>
<body>
    <div class="judul">

        <h1> Struk   </h1>
    </div>

    <table>
        <tbody>
            <tr>
                <th>
                    IDTrans :
                </th>
                <th>
                    {{ $penjualan->IDTrans }}
                </th>
            </tr>
            <tr>
                <th>
                    IDproduk :
                </th>
                <th>
                    {{ $penjualan->IDproduk }}
                </th>
            </tr>
            <tr>
                <th>
                    Harga Jual :
                </th>
                <th>
                    {{ $penjualan->hargajual }}
                </th>
            </tr>
            <tr>
                <th>
                    Qty :
                </th>
                <th>
                    {{ $penjualan->qty }}
                </th>
            </tr>
            <tr>
                <th>
                    Dibayar :
                </th>
                <th>
                    {{ $penjualan->dibayar }}
                </th>
            </tr>
            <tr>
                <th>
                    Kembali :
                </th>
                <th>
                    {{ $penjualan->kembali }}
                </th>
            </tr>
            <tr>
                <th>
                    Tanggal :
                </th>
                <th>
                    {{ $penjualan->tanggal }}
                </th>
            </tr>
        </tbody>
    </table>


    
</body>
</html>