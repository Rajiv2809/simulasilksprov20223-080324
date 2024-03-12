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

        <h1>kwitansi  </h1>
    </div>

    <table>
        <tbody>
            <tr>
                <th>
                    ID pendapatan :
                </th>
                <th>
                    {{ $pendapatan->IDpendapatan }}
                </th>
            </tr>
            <tr>
                <th>
                    ID Tenant :
                </th>
                <th>
                    {{ $pendapatan->IDtenant }}
                </th>
            </tr>
            <tr>
                <th>
                    total pendapatan :
                </th>
                <th>
                    {{ $pendapatan->totalPendapatan }}
                </th>
            </tr>
            <tr>
                <th>
                    setoran Tenant :
                </th>
                <th>
                    {{ $pendapatan->IDpendapatan }}
                </th>
            </tr>
            <tr>
                <th>
                    Tanggal :
                </th>
                <th>
                    {{ $pendapatan->tanggal }}
                </th>
            </tr>
        </tbody>
    </table>


    
</body>
</html>