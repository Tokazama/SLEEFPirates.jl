var documenterSearchIndex = {"docs":
[{"location":"#SLEEFPirates.jl","page":"Home","title":"SLEEFPirates.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SLEEFPirates]","category":"page"},{"location":"#SLEEFPirates._ilogbk-Tuple{Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}, Static.False}","page":"Home","title":"SLEEFPirates._ilogbk","text":"ilogbk(x) -> Int\n\nReturns the integral part of the logarithm of |x|, using 2 as base for the logarithm; in other words this returns the binary exponent of x so that\n\nx = significand × 2^exponent\n\nwhere significand ∈ [1, 2).\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates._ldexpk-Tuple{Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}, Union{Int32, Int64, VectorizationBase.AbstractSIMD{var\"#s1\", Int32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Int64} where var\"#s1\"}, Static.False}","page":"Home","title":"SLEEFPirates._ldexpk","text":"ldexpk(a, n)\n\nComputes a × 2^n.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates._split_exponent-NTuple{4, Any}","page":"Home","title":"SLEEFPirates._split_exponent","text":"A helper function for ldexpk\n\nFirst note that r = (q >> n) << n clears the lowest n bits of q, i.e. returns 2^n where n is the largest integer such that q >= 2^n\n\nFor numbers q less than 2^m the following code does the same as the above snippet     r = ( (q>>v + q) >> n - q>>v ) << n For numbers larger than or equal to 2^v this subtracts 2^n from q for q>>n times.\n\nThe function returns q(input) := q(output) + offset*r\n\nIn the code for ldexpk we actually use     m = ( (m>>n + m) >> n -  m>>m ) << (n-2). So that x has to be multplied by u four times x = x*u*u*u*u to put the value  of the offset exponent amount back in.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.acos-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.acos","text":"acos(x)\n\nCompute the inverse cosine of x, where the output is in radians.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.acos_fast-Tuple{T} where T<:Union{Float32, Float64}","page":"Home","title":"SLEEFPirates.acos_fast","text":"acos_fast(x)\n\nCompute the inverse cosine of x, where the output is in radians.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.acosh-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.acosh","text":"acosh(x)\n\nCompute the inverse hyperbolic cosine of x.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.asin-Tuple{T} where T<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.asin","text":"asin(x)\n\nCompute the inverse sine of x, where the output is in radians.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.asin_fast-Tuple{T} where T<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.asin_fast","text":"asin_fast(x)\n\nCompute the inverse sine of x, where the output is in radians.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.asinh-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.asinh","text":"asinh(x)\n\nCompute the inverse hyperbolic sine of x.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.atan-Tuple{T} where T<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.atan","text":"atan(x)\n\nCompute the inverse tangent of x, where the output is in radians.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.atan-Union{Tuple{T}, Tuple{T, T}} where T<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.atan","text":"atan(x, y)\n\nCompute the inverse tangent of x/y, using the signs of both x and y to determine the quadrant of the return value.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.atan_fast-Tuple{T} where T<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.atan_fast","text":"atan_fast(x)\n\nCompute the inverse tangent of x, where the output is in radians.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.atan_fast-Union{Tuple{T}, Tuple{T, T}} where T<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.atan_fast","text":"atan2_fast(x, y)\n\nCompute the inverse tangent of x/y, using the signs of both x and y to determine the quadrant of the return value.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.atanh-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.atanh","text":"atanh(x)\n\nCompute the inverse hyperbolic tangent of x.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.cbrt-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.cbrt","text":"cbrt(x)\n\nReturn x^{1/3}. The prefix operator ∛ is equivalent to cbrt.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.cbrt_fast-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.cbrt_fast","text":"cbrt_fast(x)\n\nReturn x^{1/3}.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.cos","page":"Home","title":"SLEEFPirates.cos","text":"cos(x)\n\nCompute the cosine of x, where the output is in radians.\n\n\n\n\n\n","category":"function"},{"location":"#SLEEFPirates.cos_fast","page":"Home","title":"SLEEFPirates.cos_fast","text":"cos_fast(x)\n\nCompute the cosine of x, where the output is in radians.\n\n\n\n\n\n","category":"function"},{"location":"#SLEEFPirates.cosh-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.cosh","text":"cosh(x)\n\nCompute hyperbolic cosine of x.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.divby3-Union{Tuple{VectorizationBase.AbstractSIMD{var\"#s2\", T} where var\"#s2\"}, Tuple{T}} where T","page":"Home","title":"SLEEFPirates.divby3","text":"Algorithm:\n\n    movsxd  rax, edi\n    imul    rax, rax, 1431655766\n    mov     rcx, rax\n    shr     rcx, 63\n    shr     rax, 32\n    add     eax, ecx\n    ret\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.hypot-Union{Tuple{T}, Tuple{T, T}} where T<:Union{Float16, Float32, Float64, Vec{var\"#s160\", var\"#s158\"} where {var\"#s160\", var\"#s158\"<:Union{Float16, Float32, Float64}}, VectorizationBase.VecUnroll{var\"#s157\", var\"#s156\", var\"#s152\", V} where {var\"#s157\", var\"#s156\", var\"#s152\"<:Union{Float16, Float32, Float64}, V<:Union{Bool, Float32, Float64, Int16, Int32, Int64, Int8, UInt16, UInt32, UInt64, UInt8, VectorizationBase.Bit, VectorizationBase.AbstractSIMD{var\"#s156\", var\"#s152\"}}}}","page":"Home","title":"SLEEFPirates.hypot","text":"hypot(x,y)\n\nCompute the hypotenuse \\sqrt{x^2+y^2} avoiding overflow and underflow.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.ilogb-Tuple{Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}}","page":"Home","title":"SLEEFPirates.ilogb","text":"ilogb(x)\n\nReturns the integral part of the logarithm of abs(x), using base 2 for the logarithm. In other words, this computes the binary exponent of x such that\n\nx = significand × 2^exponent,\n\nwhere significand ∈ [1, 2).\n\nExceptional cases (where Int is the machine wordsize)\nx = 0    returns FP_ILOGB0\nx = ±Inf  returns INT_MAX\nx = NaN  returns FP_ILOGBNAN\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.log-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.log","text":"log(x)\n\nCompute the natural logarithm of x. The inverse of the natural logarithm is the natural expoenential function exp(x)\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.log10-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.log10","text":"log10(x)\n\nReturns the base 10 logarithm of x.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.log1p-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.log1p","text":"log1p(x)\n\nAccurately compute the natural logarithm of 1+x.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.log2-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.log2","text":"log2(x)\n\nReturns the base 2 logarithm of x.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.log_fast-Union{Tuple{BASE}, Tuple{Val{BASE}, Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}, Static.False}} where BASE","page":"Home","title":"SLEEFPirates.log_fast","text":"log_fast(x)\n\nCompute the natural logarithm of x. The inverse of the natural logarithm is the natural expoenential function exp(x)\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.pow-Union{Tuple{V}, Tuple{V, V}} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.pow","text":"pow(x, y)\n\nExponentiation operator, returns x raised to the power y.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.sin","page":"Home","title":"SLEEFPirates.sin","text":"sin(x)\n\nCompute the sine of x, where the output is in radians.\n\n\n\n\n\n","category":"function"},{"location":"#SLEEFPirates.sin_fast","page":"Home","title":"SLEEFPirates.sin_fast","text":"sin_fast(x)\n\nCompute the sine of x, where the output is in radians.\n\n\n\n\n\n","category":"function"},{"location":"#SLEEFPirates.sincos","page":"Home","title":"SLEEFPirates.sincos","text":"sincos(x)\n\nCompute the sin and cosine of x simultaneously, where the output is in radians, returning a tuple.\n\n\n\n\n\n","category":"function"},{"location":"#SLEEFPirates.sincos_fast","page":"Home","title":"SLEEFPirates.sincos_fast","text":"sincos_fast(x)\n\nCompute the sin and cosine of x simultaneously, where the output is in radians, returning a tuple.\n\n\n\n\n\n","category":"function"},{"location":"#SLEEFPirates.sinh-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.sinh","text":"sinh(x)\n\nCompute hyperbolic sine of x.\n\n\n\n\n\n","category":"method"},{"location":"#SLEEFPirates.tan","page":"Home","title":"SLEEFPirates.tan","text":"tan(x)\n\nCompute the tangent of x, where the output is in radians.\n\n\n\n\n\n","category":"function"},{"location":"#SLEEFPirates.tan_fast","page":"Home","title":"SLEEFPirates.tan_fast","text":"tan_fast(x)\n\nCompute the tangent of x, where the output is in radians.\n\n\n\n\n\n","category":"function"},{"location":"#SLEEFPirates.tanh-Tuple{V} where V<:Union{Float32, Float64, VectorizationBase.AbstractSIMD{var\"#s1\", Float32} where var\"#s1\", VectorizationBase.AbstractSIMD{var\"#s1\", Float64} where var\"#s1\"}","page":"Home","title":"SLEEFPirates.tanh","text":"tanh(x)\n\nCompute hyperbolic tangent of x.\n\n\n\n\n\n","category":"method"}]
}
