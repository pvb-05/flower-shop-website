// config.js
module.exports = {
    PAYOS_CLIENT_ID: "caa2c484-b120-4d73-aa2f-08dce25fc35c",
    PAYOS_API_KEY: "b1189e98-45c8-48bf-a708-c12e64e69c1b",
    PAYOS_CHECKSUM_KEY: "790ebd3b60ec2ae8f6cca4a745ec3edba92190ee8628bb092e587097540b9a10",
    
    // Khi chạy local, sau khi khách quét mã xong, payOS sẽ redirect về đây
    RETURN_URL: "http://localhost:3000/orders/success", 
    CANCEL_URL: "http://localhost:3000/orders/cancel"
};