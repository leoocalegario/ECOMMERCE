package app.config;

import io.jsonwebtoken.SignatureAlgorithm;

public class JwtConfig {

	//Parâmetros para geração do token
	public static final String SECRET_KEY = "jabulanifulecojabulanifulecojabulanifulecojabulanifuleco5465!";
	public static final SignatureAlgorithm ALGORITMO_ASSINATURA = SignatureAlgorithm.HS256;
	public static final int HORAS_EXPIRACAO_TOKEN = 1;

}