# API Reference - Dashboard MIS ISLAMIYAH PARIAMAN

Dokumentasi API untuk integrasi backend dan pengembangan lanjutan.

## 📚 Daftar Isi

1. [REST API Endpoints](#rest-api-endpoints)
2. [Data Models](#data-models)
3. [Request/Response Format](#requestresponse-format)
4. [Error Handling](#error-handling)
5. [Authentication](#authentication)
6. [Examples](#examples)

---

## 🔗 REST API Endpoints

### Base URL
```
http://api.misislmiyahpariaman.sch.id/v1
```

### Penerimaan Siswa

#### POST /registrations
Membuat pendaftaran siswa baru

**Request**
```json
{
  "namaLengkap": "Ahmad Reza Pratama",
  "tempatLahir": "Pariaman",
  "tanggalLahir": "2015-06-15",
  "jenisKelamin": "laki-laki",
  "asalSekolah": "SD Negeri 01",
  "kelasTujuan": "1"
}
```

**Response** (201 Created)
```json
{
  "id": "REG001",
  "status": "success",
  "message": "Pendaftaran berhasil disimpan",
  "data": {
    "registrationId": "REG20260609001",
    "status": "pending",
    "createdAt": "2026-06-09T10:30:00Z"
  }
}
```

#### GET /registrations
Mengambil daftar semua pendaftaran

**Query Parameters**
```
?status=pending|approved|rejected
?class=1,2,3,4,5,6
?sort=createdAt&order=desc
?page=1&limit=10
```

**Response** (200 OK)
```json
{
  "status": "success",
  "data": [
    {
      "id": "REG001",
      "namaLengkap": "Ahmad Reza Pratama",
      "status": "approved",
      "kelasTujuan": "1",
      "createdAt": "2026-06-09T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 15
  }
}
```

#### GET /registrations/:id
Mengambil detail pendaftaran

**Response** (200 OK)
```json
{
  "status": "success",
  "data": {
    "id": "REG001",
    "namaLengkap": "Ahmad Reza Pratama",
    "tempatLahir": "Pariaman",
    "tanggalLahir": "2015-06-15",
    "jenisKelamin": "laki-laki",
    "asalSekolah": "SD Negeri 01",
    "kelasTujuan": "1",
    "status": "approved"
  }
}
```

#### PUT /registrations/:id
Update pendaftaran

#### DELETE /registrations/:id
Hapus pendaftaran

---

### Nilai Siswa

#### POST /grades
Membuat record nilai baru

**Request**
```json
{
  "studentId": "STU001",
  "subjectId": "SUB001",
  "classId": "CLS001",
  "value": 85,
  "semester": "genap"
}
```

**Response** (201 Created)
```json
{
  "status": "success",
  "message": "Nilai berhasil disimpan",
  "data": {
    "gradeId": "GRD20260609001",
    "createdAt": "2026-06-09T11:30:00Z"
  }
}
```

#### GET /grades
Mengambil daftar nilai

**Query Parameters**
```
?studentId=STU001
?subjectId=SUB001
?semester=ganjil|genap
?minValue=80&maxValue=100
```

#### GET /grades/:id
Mengambil detail nilai

#### PUT /grades/:id
Update nilai

#### DELETE /grades/:id
Hapus nilai

---

### Master Data

#### GET /students
Mengambil daftar siswa aktif

#### POST /students
Membuat record siswa baru

#### GET /classes
Mengambil daftar kelas

#### POST /classes
Membuat kelas baru

#### GET /subjects
Mengambil daftar mata pelajaran

#### POST /subjects
Membuat mata pelajaran baru

---

### Laporan

#### GET /reports/registrations
Mengambil laporan penerimaan

**Query Parameters**
```
?status=approved|rejected|pending
?dateFrom=2026-01-01&dateTo=2026-12-31
?format=json|csv|pdf
```

#### GET /reports/grades
Mengambil laporan nilai

**Query Parameters**
```
?semester=ganjil|genap
?classId=CLS001
?format=json|csv|pdf
```

#### GET /reports/students
Mengambil laporan siswa

---

## 📊 Data Models

### Student
```javascript
{
  id: String,           // STU001, STU002, ...
  nama: String,
  tempatLahir: String,
  tanggalLahir: Date,
  jenisKelamin: String, // laki-laki | perempuan
  nisn: String,
  nik: String,
  asalSekolah: String,
  kelasId: String,
  status: String,       // aktif | nonaktif
  createdAt: Date,
  updatedAt: Date
}
```

### Registration
```javascript
{
  id: String,               // REG001
  namaLengkap: String,
  tempatLahir: String,
  tanggalLahir: Date,
  jenisKelamin: String,
  asalSekolah: String,
  kelasTujuan: String,
  status: String,           // pending | approved | rejected
  berkasDiverifikasi: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Grade
```javascript
{
  id: String,           // GRD001
  studentId: String,
  subjectId: String,
  classId: String,
  value: Number,        // 0-100
  semester: String,     // ganjil | genap
  tahunAjaran: String,  // 2025/2026
  createdAt: Date,
  updatedAt: Date
}
```

### Subject
```javascript
{
  id: String,           // SUB001
  name: String,
  kode: String,
  kkm: Number,          // Kriteria Ketuntasan Minimal
  jam: Number,
  createdAt: Date
}
```

### Class
```javascript
{
  id: String,           // CLS001
  nama: String,         // 1A, 2B, dst
  waliKelas: String,
  siswaCount: Number,
  tahunAjaran: String,
  createdAt: Date
}
```

---

## 📬 Request/Response Format

### Standard Response Format

#### Success (2xx)
```json
{
  "status": "success",
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

#### Error (4xx, 5xx)
```json
{
  "status": "error",
  "message": "Error message",
  "code": "ERROR_CODE",
  "errors": [
    {
      "field": "fieldName",
      "message": "Field error message"
    }
  ]
}
```

### Common Headers

#### Request
```
Content-Type: application/json
Authorization: Bearer {token}
X-API-Version: 1.0
```

#### Response
```
Content-Type: application/json
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
```

---

## ⚠️ Error Handling

### Error Codes

| Code | HTTP | Description |
|------|------|-------------|
| VALIDATION_ERROR | 400 | Validation failed |
| UNAUTHORIZED | 401 | Missing/invalid auth |
| FORBIDDEN | 403 | Access denied |
| NOT_FOUND | 404 | Resource not found |
| CONFLICT | 409 | Resource conflict |
| RATE_LIMIT | 429 | Rate limit exceeded |
| SERVER_ERROR | 500 | Internal server error |

### Error Response Example
```json
{
  "status": "error",
  "code": "VALIDATION_ERROR",
  "message": "Validation failed",
  "errors": [
    {
      "field": "namaLengkap",
      "message": "Nama harus minimal 3 karakter"
    },
    {
      "field": "tanggalLahir",
      "message": "Format tanggal tidak valid"
    }
  ]
}
```

---

## 🔐 Authentication

### API Key Authentication
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.misislmiyahpariaman.sch.id/v1/students
```

### JWT Token
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 3600,
  "type": "Bearer"
}
```

### Rate Limiting
- 1000 requests per hour
- Rate limit headers included in response

---

## 📝 Examples

### cURL Examples

#### Buat Pendaftaran
```bash
curl -X POST https://api.misislmiyahpariaman.sch.id/v1/registrations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "namaLengkap": "Ahmad Reza Pratama",
    "tempatLahir": "Pariaman",
    "tanggalLahir": "2015-06-15",
    "jenisKelamin": "laki-laki",
    "asalSekolah": "SD Negeri 01",
    "kelasTujuan": "1"
  }'
```

#### Ambil Daftar Siswa
```bash
curl -X GET "https://api.misislmiyahpariaman.sch.id/v1/students?page=1&limit=10" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

#### Masukkan Nilai
```bash
curl -X POST https://api.misislmiyahpariaman.sch.id/v1/grades \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "studentId": "STU001",
    "subjectId": "SUB001",
    "classId": "CLS001",
    "value": 85,
    "semester": "genap"
  }'
```

### JavaScript Examples

#### Fetch Registrations
```javascript
async function getRegistrations() {
  try {
    const response = await fetch(
      'https://api.misislmiyahpariaman.sch.id/v1/registrations',
      {
        headers: {
          'Authorization': 'Bearer YOUR_TOKEN'
        }
      }
    )
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

#### Create Grade
```javascript
async function createGrade(gradeData) {
  try {
    const response = await fetch(
      'https://api.misislmiyahpariaman.sch.id/v1/grades',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_TOKEN'
        },
        body: JSON.stringify(gradeData)
      }
    )
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
  }
}
```

---

## 🚀 Best Practices

### API Usage
- Always include proper error handling
- Implement retry logic untuk failed requests
- Use pagination untuk large datasets
- Cache responses ketika memungkinkan
- Validate input sebelum mengirim

### Security
- Never expose API keys di client-side
- Use HTTPS untuk semua requests
- Implement CORS properly
- Validate all inputs
- Rate limit per IP/user

### Performance
- Use pagination untuk list endpoints
- Implement caching strategy
- Optimize query parameters
- Use batch endpoints jika tersedia
- Monitor API response times

---

## 📞 Support

- **API Status**: https://status.misislmiyahpariaman.sch.id
- **Support Email**: api-support@misislmiyahpariaman.sch.id
- **Documentation**: https://docs.misislmiyahpariaman.sch.id

---

**Version**: 1.0.0  
**Last Updated**: June 9, 2026
