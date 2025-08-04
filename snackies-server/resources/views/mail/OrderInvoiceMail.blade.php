<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Order Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f9f9f9;
            padding: 20px;
        }

        .container {
            background: #fff;
            max-width: 600px;
            margin: auto;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
            padding: 30px;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #eee;
            padding-bottom: 15px;
            margin-bottom: 25px;
        }

        .logo {
            height: 50px;
        }

        .user-info {
            text-align: right;
        }

        .user-info strong {
            display: block;
            font-size: 16px;
        }

        .order-details {
            font-size: 16px;
        }

        .order-details h2 {
            color: #1A73E8;
            font-size: 18px;
            margin-bottom: 10px;
        }

        .order-details table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        .order-details th,
        .order-details td {
            text-align: left;
            padding: 8px;
            border-bottom: 1px solid #eee;
        }

        .footer {
            margin-top: 40px;
            border-top: 1px solid #ddd;
            padding-top: 20px;
            font-size: 14px;
            color: #777;
            text-align: center;
        }

        a {
            color: #1A73E8;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <div class="user-info">
                <strong>{{ $user->first_name }} {{ $user->last_name }}</strong>
                <a href="mailto:{{ $user->email }}">{{ $user->email }}</a>
            </div>
        </div>

        <div class="order-details">
            <h2>Order Invoice</h2>
            <table>
                <tr>
                    <th>Order ID:</th>
                    <td>{{ $order->id }}</td>
                </tr>
                <tr>
                    <th>Status:</th>
                    <td>{{ ucfirst($order->status) }}</td>
                </tr>
                <tr>
                    <th>Total Amount:</th>
                    <td>${{ number_format($order->total_amount, 2) }}</td>
                </tr>
                <tr>
                    <th>Shipping Address:</th>
                    <td>{{ $order->shipping_address }}</td>
                </tr>
                <tr>
                    <th>Order Date:</th>
                    <td>{{ $order->created_at->format('F j, Y - H:i') }}</td>
                </tr>
            </table>
        </div>

        <div class="footer">
            <p>Thanks for choosing Snackies 🍪<br>
                This is an automated email. Please do not reply directly to this message.</p>
            <p>
                <a href="https://www.snackies.com">www.snackies.com</a>
            </p>
        </div>
    </div>
</body>

</html>