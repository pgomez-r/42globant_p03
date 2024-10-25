import React from 'react';

const Map = () => {
	return (
		<div className="flex justify-center items-center w-auto h-auto m-8">
			<div className="relative">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12795.853104703301!2d-4.449978873074084!3d36.69942036270921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7f2e078f06f%3A0x83373ce398d08f92!2zNDIgTcOhbGFnYSBGdW5kYWNpw7NuIFRlbGVmw7NuaWNh!5e0!3m2!1ses!2ses!4v1729869475602!5m2!1ses!2ses"
					width="600"
					height="450"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
  );
};

export default Map;