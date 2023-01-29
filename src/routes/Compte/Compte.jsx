import { BottomNavBar } from "../../components/atoms/BottomNavBar/BottomNavBar";
import { Button } from "@mui/material";
import "./compte.css";
import "../base.css";

export default function Compte() {
  const user = {
    pseudo: "gandalf",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhUYGBgZHBgYGBwYGBgaGhoZGRgZHBwcGhwcIS4lHB4rIRoaJjgmKy8xNjU1GiQ7QDs0Py40NTQBDAwMEA8QHBISGjEhGiQxNDQ0NDE0NDQ0NDExNDQ0NDExMTQ0NDQ0NDE0NDQxNDQxNDQ0ND80NDE0NDExPzExMf/AABEIAOEA4AMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABBEAACAQIDBQYDBgMHBAMBAAABAgADEQQhMQUSQVFhBiJxgZGhMrHwE0JSYsHRB3KCFCMzorKz8SRDkuEWNDUV/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQEAAgMBAQEAAAAAAAAAAQIRITEDEkEiYTL/2gAMAwEAAhEDEQA/AOwrFxuLUx1MKEORcRiQhQH77boP5rEgedpJBiUKAiKhGBcNQQ2hSkhBBFBYAQEWBBIG0tqJRUlmF+Avn58ovZyLC8bNZQbFhflcXnM9vdq67A7p3FP4cr/qZhsdi2ckuxbxzj+q+PRFxBPPmzO0uKwxH2VZwv4GO8n/AItp5Wm32R/FJclxNIr+elmPNSbjyJhc2Cx0yIaQNk7ZoYld6hVRxx3T3l6MpzU+MsLRIpMEEEZBBBBADURyEsOKqkM16oVSx0AJPlEYKvv01f8AEA3rmPaUHbHGkKtFT3nIv4HIfXSaDB0t1EX8KqvoAP0hzkhS9qRENFxtoQUUWoiBHBCiKPtdSY4cuuTU2WotvynP2Jk7ZGOFakrjUizDkw1H1zj+MphkZTxUj2mL7JY406zUGPdYkDow09Rl6RzPc3/Ct5W9hGHCkrNGARZEMCV1PBAQMwGsRVqBRf5ZknkBxMotsbRdEvkt9M9B1sffnpzik7Tng1t/tEEO4mZtdjexHn93xmLxWKLlnc9TyHLdB68T1kXaGOux3c+BOtzfX5SreoWyOmp6+P79JrJJ6XIibQxLObknPS95VuZLxL6mVzteFMRaC8baGrwA8PinouKlJ3RxoyMVPhlqOhynT+x38SC7rRxYUE5JVUboJ4B1vkTzGV+AnL6kTT4fXnFZKXHqDIi4zvyhTnPYDtBUH/T1M90CxJytw3T9XnRwQQCDcSLLEagoIIBBJwRqvVCqWOgBJ8o9Mz2qx2QpA695vDgP18oZzdXh6vIosFUOIxis34t63IXyHkJ0ICYjsfRvWL/lJ9wB8zNxK+X3wseugY2THDGpEOjWOCNCOLCiAZzPa1L7PENbKzWB6g3U/L0nTDMN2tof3x/MoI8RcfpNPivnhfJ6anY+N+1pq3HRv5h+nHzljMP2ax+4wue69lboeB/Tzm4Ejefro8a7AgJgMqdsY9UW19dRrkNRyik6o1jdooqGoc1FwnNjpcDrfLp4znO2NpvVci/dB0Gg4ZHjH9ubUarrpfugcuvWUxNh46zWTkOQh9L+Uh1nsCOcmMN0XOpGXhzldiBBSBXN4wySSyxSU4gr6kalk9LOKGDuM4BVmpEo8dxuG3DITCMNPsTHWZVZrEHuty/Kek6h2d7SKpCN8BJFzqp/Eel8jynEKNTT6/4mr2HtDeG4zWuCCeDLbQjieHUeELO+Csd7NokTPdj9p79JaZJ3kFlLG5ZRwJ5jIeGc0TCZ+vDOw1i64RSx0A/4HraYLaVUuxv8Tm58+A9vSXXaLH7zikDknefq1sh5DPzEzqPvMW4DTynR8OeTtY7128anslRsrtbiFHkM/mJpZUdm6O7QX8xLepsPYCW8593uq2zOQljERTRMIKEUDEwQI5M12xodxKnFW3T4ML/Me80ayHtnD79F147pI8RmPrrDN5qHfOXPKL7r24NmJvdhYz7SmAx7y91uvI+YnPavwhuKnPwM0GwcbusG4Hut4f8AqdPyZ+2f9Y519a1e0cYtJC7GwGnU2ynOtqbVNVjc7q8Vyva97Gx8z4njaTu3O09+otFSN1ACx/OwBHotj5zMVH3QCD0Fx97Unru6+O7yMxzOR0ydJruL6afVv38Y0PxHy6n9oSC/RR9esRUe55D5CUo1Ua5uZEqrJRjqUgBvNrwEQVLp0iVEl1jcxCJECkwvdLcoSMBxtLQJ/dt0BJmcq1MvrpAF7RRWXLhpM+xk/EVjIFSAGo5SfhnkFDJKRhvOx+1t2qHJzX4uAtoCPM+869iMWopl1INxdetxlPOOFrG4tz+s/bznTdibbNWkKZNwneXwOoPgeHC8PrNajPfiG9p1t0k3zJJJ+cKhkgyzbvftK/aTl6gQcSL+GpMtsKu/VReBZB7i86L4c3HQ9n092mi/hVR6ASTCEOcLpniG3hQ2hSkhBBAIwcWAwCGZCp6c62nhQlZ0Pwkm3g2Y+ftIGzcVubyv9y9/LL3y9ZqO1uF76VANQVPiveHtf0mJ22NxrjRx8v37s68a/jrD6/1xFNUuzO7ZsdTpvHiegGfkBxkXEV99gBcKosoPAa59TcserdI1iaw04KPVjqfW3kIzh+cz66pORMJNgBpAVhoMrxxEgZCU7ZnyjNV7x6oZFaIGXhICTYanSFVewjuxkd2LDJNCba+BjC4pYclHGoC2PmQB7zI7VpKhAVWsLgsx+I9BwE3Bp7iEEhd4g58baX1mE28gWqy7xNrWuchcXtpAK9jlIzjOLR+BjhoFlYj7ouf5dCfUiTQRTj4kVBaP04h06htneabs9jgpsMy+Y1yIuGW3UWPlMvJODrFTcGxBBHiDlKlKzsdAwNEs7OeAsPG1z7Wmg7KYUtXDHRVLnxYkL+p8pTdn/wC8pEj7xF8uBA08vnNz2ZoWR3t8bHd/kQBV+RmvyXmXNJfsvREsYW9CnNxr0IIIIEEEEEAWDFXjV4e9Fw5UHbNDfpNbMjvL4j695yjtK9qgT8Ki39RuPTL0nZSJxHtNUDYqsQcg7KP6e7+nzmmdeODOe66qcQdBzz9/+Y5RMjPV3mJ+WmWUfptG1WCNHSSBfnpGMIu8bn4Rmf2iK2J3myGWggCmaNNFgZ2jowpaw5xhFw+CNVh+G9j4cT4cPOXGPxyYZAxFzoiaXI425CP1qyUKRdh3RkAPiqPwUfWUwuPxD1nZ3NyfQACwAHAAWiK1Cx+PqVXLu1yTfoOg5CNPiN5Ar/EvwHmpOa/qPOPmkIxUpAyuF9vJGGQMwDGw4kSdUpFCGysb91Tqote5Hpx/SRQUv30J57rbt/Ig5+ksf/7m6LJh6S2yu2+597AGLh9iDi8Nu2cZo3wnUg8Va2jD314xpGllg9sM+/SdUC1LDJFG63BhyINsxnlK/E0GpuUPDS2hHAiTYZe9HKL+X1rGDDw7ZxQN32Nrsay0wbb4KdL/ABLbkRZx4WnasNRCKqjRQAPITz/2exDJWRl+6Q//AId4+wb1noOm4IBHEA+sW76iLnz0GETFmIiiAggggAgggjAQ1EKLEVAnNgTyznn7auK79Q2zd3NzwBck26zu+18QKdCo5NgqMfYzzfiKt2J+uceWmTwcCSaF2yGpkOkt7S5wSbi733jkvQcTLij9Q7q7g0HxEcTyiaQsN7idP38IhF3j0GvWSKSbx6aeMYLwtAnM8fq8s6e6qs7HdRB3m4WH3QOJzHiY1h6e8SAbAfG3AdAfCVPaF6j7qKpFJdAPvN+JufTz5w4VvFZtjaLV33iN1Bkia7q9fzHUmQwkcSlJC0TKkRai/Zxp6MsCkadDyhwuq00YPshLans++btur7wxi6KHuIGb8TZjyEB1RVsK1rhW8QpisVWLohPxKCh8swfcjylnj8Y7jN7DkuQ9BrKhUvdeJ08RpJsXmiDXAMOhqI2jcI5Q1k1S4wr2IP1Y5H5z0JsGvv4ai/4qdM+e6L+9555pCdz7AVt7AUcvhDL/AOLMJO/Sa0TREcMbMURQggggQQQQQA1i7QlEVFTkYz+JuM3MIEBs1Vwg8Bdj8vecUdO+QOBM6p2/rq+IphiClJWYqeLC2vLMr6GcyJzJ5kn1l5nhpCqItLLeJsOJsPASDRyPWPLVuSo/qP6CUaelrWGnHrLDB4cuQi/EdegP6/8AErcNd2CoCzEgKBxPACW+1cb/AGOkaaWau4sx1CX19Pf1jnkK/tPjSi/2eirE277KN7PO4uPrLwmewW1qiNusSOjX975y97L9rFoncxNIuLhg62vcaXHGSO0e0sBic0Rw5tZgrALYHjxJ/SazM/GOrbUWniqT/EoVj6eUQ1OO7P2RvoxU3Ke/G49/DOBUyh9bE2orrG3xQUZC5/WO1wdIttkEoGLBd7JSRew4vbK9uA4m0OWmoK+Ieq+4LtyVR+l7DzhPs3EC5+zYAcyAZr9iYjDYU/A1Qg3DqvHiSHIvf1jnabtUcQu5Ro7g+87W3jlYWAyGUdzJ7PrAoXPA34g/+vlHEp94eI+csaeF3Rb1goULuB1HzH7zPh9QcRhMg6jW4YcmAz8uPnGqaEEfXh9dZf0kuEuCVdn3gNcmG6R1Gfy4xvGbL+zQPdT39ywz7rr3HHTeTThvC/CRY0l7DFFdPrpOyfwvq72Ct+Gow9QrfrOQBbHLoeeuc6t/Cxv7quvKoD6oM/OLXoVu7Rto5EMJnGdJgggjIIYEKKAgChG69UKpY6AEnyEcEpe0WL3FVALliWI5qg3jfoW3R5mJWXKu11UtVdjcsbknLicx8/WZhRaaXbSFmGVgbt6n97+0oa9EzRoiVKpGQ1Op5DlHcDRd2CIpYnKw1Mk4DYz1Wt8Kj4mN/QczLHF7apYVDQw1i5FnqZEgcQCPl0jCa2KTBJurZ8SwsWBypqdVUjieLeQ5yiVy5LMbk/XpI+JQ7xubkG99fiAMfwizXOZxlrR5cJfhJOH2eL6CP4fhLBEFpUiLS8M24hAtc5RhaFzHSMorDVBvCPzUo+NwukXTr2TcIylltKlum0rGp5aRTwFfUQco09PpJ7U5HcQOVAqgAX0jOAQlmI+6DbxOQ97HyjuL5Sz2Jgu6CR8Rb/KP3PtFZ4V0y6rTokt9wEgczeqbeij1kaihZKnIJvgngVN7i3UL7yRtup3WBGW+fRVT92Eaw1XcwVWo5I31Skg/EzFmb0UAnxEy00x6QS+8xPgPQAfpOjfwtxHeqoeKoR/Qd31sVnMcG3dE2/8ADvF7mKVfxqy+ZzHuItTwquwxDRQhGYopuCCCUkUWImGDCguZjtZTzDG3+DiBpe2SNl1ymnvM52yp3pK17DeKMcslqU3Q355lYT2rLD4tQ7WysLL11trx1EhjZy73MddM+fl6A9InE4jcZhfPfa/ge8M+OpHvG+1uOKYYlct8hBY8CN5j6ZTRooNu9o9aOHyQd1nGRbmE5L1lJhqBDH68fmJAE1GHod1H/Epv4hd39B6w9lqk7RNqtE/dq01X+te77i0ewykGxkXaiE4cfipPvDwBsfTeU/0y1wtnRKg+8AT0PEet5rm/jLXrqbh0llSTKRKCyfQE04ytRcXkJDw9TvAgy0xWG3gRzFpQjZNZGJU7wjPNXu1MSd6zCxyvfqJGoVN7TOVz7NrVSLtuj3PjLrA7O3Ftmep4xexrhl0kGuJb1EkGtTvDhSqY0izD1M1mGoBCifhRSehdgT7KPWV2Bwt3UEan2GcsnqXNd+u4PAd39zI0fesh2kq9xU4uzN1sSWtbwdR/TIvabEkLRw1xamtzu/icLr1AUD1ktHV6zVn+CgoNtd52zCgc8/aZzEVTUqFjqTc+P7ftMb7dGZyLHDaCXvZ7EblZHvbdYN5A3PtKKlkJZ7NPetzy9ozr0DSa4BGhzHgdIsyr7N1S2FosddxQf6Rb9JaTD9SaMEUwiZSAhgQosCFAwJV9o8GauGqoACxUlb/iXNfcS1me7XbWehRP2YvUcEIdQmWbnnbgOJMU71fHINrVQH3h95bkcmzuPXl+KOYhP7TgigI36Tb9uJWxF/K/tIOMVitzmRrfnrfz08pAwGPejUDpnbUHRhxB6GarUNuE2mxU36NM8nZPJ1A+YHrKztHs5G/6mgp+yc99dTTf8J/KeBlj2SPcC895h47xt/t+4hn2jXonHqAhYjI7jOPyuNx/9R9JG7KYixfDuc1YsnW2TAfOX22cL/dvYZblUeFu+v10mA+3ZWSqpswsCfzoAM/Fbepj79dJk+2XS0STqFOUmztorUQOuuW8vI8/CW2Grg65zeXsYai0QIo3nZVUcWIA9ZGTb+CDFSz2/GqXXj1v7Sg21soN31ZgOV7qPAHSU67OJNg5v0sJN+1VnMbRtv4NO6m+4/Fu7tvI5mPJjaVT4HHgcj6GY2tslqZsz58gQbeNpO2Ts7eO8SQo4nj4RyWDUnF9VSRaigXjuIrKPhAHDKUm1tpimhZjmdBfWO1Mi22VUH2jNwRN89MiR8pEq1GGGJGbPp1Z9B/nHpIvZ6oxwdeqT3qjFQerFUAHpF7bqBKSWNu8T5DJR9cAZnb460znyz+1XCIKSm+73nN/iqHXy5dJT4Vc7w8XUJt1z/b9/OO4ZbCZuhMpmTsA4314Z85W79heLwhLOANSRbxyjhV33sq6jDU0BzVRcccyc7cjLucb/wDkTUsSDTbJAqWGW8FHHn4TrOz8YtWmrjiAbcr8JlrPPKUlhERwiNkQiaNRHBECLioyZr1wouSB4mc97Q48VHJBJ0tyC8APX3k3tRtsbzIdLFUyIIOYY249D4TH4bE/ErajNeoP17TTOeKkNY/CBSWtcMLEeOhz9Jj8Um6xHp4fWXtrNpUqAgqZncdhCx3dM8jbQ/sY6tH2TjWRtwd5X7rJwYHh7+8uqeHWli0RGDUigVSPusACQff0mewoCOEJu7EKbHJAcmz4tY2yyGufB/Z+0T9qpOYZ7qeVzp4cIQtTsbjaNG6OPyN/oKmcno5oynUAOPFcj7E+gnY6vfpVN34grqfHduD6WPmZyZqXevazAd4HLyI8o9M/j8dP7MxTJZkOYyI4Ecpq8BtFXFxkeIPD95jcFldeRPp9XktGKm6kgysXg1mV0GlUDCx0kWtsgHNGK+EocBtrOz5HnwM0eG2gDbOayysrLCKGxs7u9xJ2Jqqi7i6CM18ZlcGUG0NqKlyTnwA1P7eMXeFJalY/Hqil3OWgHFjyExONxbVXLsfAcAOEVjcU9Rt5j4DgB0jDJYXmer1tnPI6JsimP7FTUab6+i98/KUna2vvFEHwrvA+OTfIn0lrsGr/ANDS5h3HmFH7zK7VxF3qKTlewPIrz6a+sm3wWZ/Ssd7m8kUqpkYqQbEGOXibHnqXMs9iJ3i50XLpkC7eir/mEqUF5Y/aFU3OQsbE6sQXHXRR/TbnH0F06hJLHUm/qbzp/YbbG84Fu6VCEDQHXePnlecrR7TR9nMU1JxzaxzNgBzPj8oe5xNju4iSJUdnto/apYksy2DEi17i8uZjZyp9kxGIeyseQJ9ou8J1BBB0IsfOBRxPtFimqVWY3A3m3db65+VxaVeIrNk41GR8NZc9pqges9gFsSLAWFwSDYcrg+spHPvlNWkKbF7w3h59DG61UOM9eI5+HWQ6pKZr8J1HDLP1/wCegj1HvAyVT+8W4ys1mHCyN6i/pImFJV0v+IEHhqMxJNOrZgTnYi9+XH2kTcKsBwBF/I6wDpWzqlqjg/C6G/rb9TMhtCmiVGo1x3f+3VUXZVb4Sw++mfHMTTuwWm7nQIR63mZqv/aqIH/epAkc3TiB87R68xln2qsTg3psL2IIurKbq6fiU8R7iSDTuLiM7P2hudx136THvIdVOm+h+6w9DxlmtJUZd1t9HF0bS/NSODDLKGby8VfXVW6RVLEOvwsR7/OWdbCcRIj4fpNOJllNvjah1c+w+UhuCdZMakeUVTwpMOD0i0sNxMbxYAFvKXH2FhKfHnv25frJ14gl7Wu7NPfBgfhrkf8Ako/YzF4tyXf+ZvmZrexlS9KqnG++P6bX9jMpjBZ3/nb/AFGTfR490SORlw5EA/PSOU1LG3yEFKgdWyHv/wCvOOPVy3VFl9z4nUxNDiPu6AePXnfj9Ac4V7RpTHkQatpyvYn2yEAewq/eOnDqR+knpUN7k8bmQab3P1aSFaOB0zsLtQGqq3+JSoHhmPE5e86NOL9gGZsbTCgWG8zZaKFPHxInaJlv2jnCQJU7f29Rwqb1Rsz8KjNmPQcB1ie0e3UwtMs3eY5IvFj16Ti219qviahqVDvN/lsDoB+GGc9LnD2K2j9tVq1d3c32L7ozChuN+OevUyK75yE1ax6HI24jl9co7vdfDqOc1s4uEV5Afnfy+vr5SwfMSvrrnJMy5hM+V4RfnHMDR33Cg5E53ysIyrY7ZrbuFP57en/ExGGrujBlJBBuCOE1PaeoDSVV0Xc9DkP9HvMiI6WZ4XeIRMQN5LJV+8pyV+o5HpIFGu9PeRwd0m5XiGGjr19jpyszTccR9foeskV0fd3id5OpzB+Y8ZNPjR4fMAXBBAII0YHQj9uGkVUwcotk44IwQ33b5X+6TrboePkZsMOAygibZvfDHX81TDCx+nh5ath46uHAGmcriPsqauGAFzkAM5iqz7zM3Mk+XCa7tNidxPswe++XgOJPKUSYcIASM7A3N9PxH8K8uJsZlvzeNcTx1Z9kKbI++2S53HEqwAN+QtKvbqBMQ4sMmuOViLgjnfnHcBjP8Rie6q+VyeAhbVP2yCqPjpjccc1B7j+V7ekn8X6qq+0JOcdQcozTSSQeWQiVw6gVdRvHgOH9XPwEIuSbmNQ7wM6r2jyvl8/CQr/R+ZhVKv1zMaa6T/CXFoMRUVmAdkAQE5mxJIHWdgnlWjWZGDoxVgbgg2II6zuH8Pu2oxa/Y1SBiEHgKg5r1HESNZ/U9UX8Tv8AHX+Rv9M5+vGCCXgG30PgY/S1XwPzhwSqqBIleCCQaHVk7Yv/AHPBPmYcEJ7K+lhtf/B8qfzeZrjDgla9ln0JpKpaH+UfOCCSo0P1/RpvNk/DBBNMe2PyriJggmzBiu0n/wBkfyyH2g+J/wCn/bEEEw17dWP+UHDf4db+mTdk6v8AyP8A7cEER/qup6CPQQSVihGCCBCGp/lPzEjPrBBHCpazUfw7/wD0cL/Mf9toIIa/5Q//2Q==",
    id: 1,
  };

  const defaultPicture =
    "data:image/jpeg;base64,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";

  return (
    <>
      <div className="page">
        <div className="header">
          <h1 className="titre">RPG Life</h1>
        </div>

        <div className="main-container">
          <div className="container">
            <div className="image-profil">
              <img
                className="image"
                src={user.image ? user.image : defaultPicture}
                alt="profil"
              />
            </div>
            <div className="pseudo-profil">
              <span>{user.pseudo}</span>
            </div>
            <div className="button-submit" id="deconnexion">
              <Button
                sx={{
                  color: "rgb(0, 153, 153)",
                  backgroundColor: "#00000020",
                  borderColor: "rgb(0, 153, 153)",
                }}
                href="connexion"
                variant="outlined"
              >
                Déonnexion
              </Button>
            </div>
          </div>
        </div>

        <div className="nav-bar">
          <BottomNavBar></BottomNavBar>
        </div>
      </div>
    </>
  );
}
